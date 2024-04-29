import Vue from 'vue';
import Vuex from 'vuex';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import firebase from '../firebase/firebase';
import { router } from '../main';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    userDetails: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setUserDetails(state, payload) {
      state.userDetails = payload;
    },
  },
  actions: {
    signUp({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((result) => {
          commit('setUser', result.user);

          console.log('user:', result.user);

          const userDetails = {
            nombre: payload.name,
            matricula: payload.matricula,
            courses: [],
          };

          commit('setUserDetails', userDetails);

          let id = result.user.uid;

          return firebase.firestore().collection('users').doc(id).set(userDetails);
        })
        .then(() => {
          router.push({ path: '/' });
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    },
    async login({ commit }, payload) {
      try {
        const resp = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password);
        const { user } = resp;

        commit('setUser', user);

        console.log('UID:', user.uid);
        console.log('Email:', user.email);
        console.log('Email Verified:', user.emailVerified);
        console.log('Display Name:', user.displayName);
        console.log('Photo URL:', user.photoURL);

        const doc = await firebase.firestore().collection('users').doc(user.uid).get();

        if (doc.exists) {
          commit('setUserDetails', doc.data());
        } else {
          console.log('No user details available in Firestore');
        }

        router.push({ path: '/' });
      } catch (error) {
        console.error('Error: ' + error.message);
        const alert = await this.$ionic.alertController.create({
          header: 'Login Failed',
          message: 'Invalid username or password, please try again.',
          buttons: ['OK'],
        });
        alert.present();
      }
    },
    logout({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit('setUser', null);
          commit('setUserDetails', null);
        })
        .catch((error) => {
          console.log('error', error);
        });
    },
    addQuizResult({ commit }, payload) {
      let courses = this.state.userDetails.courses || [];

      courses[payload.id] = payload.points;

      firebase
        .database()
        .ref('users/' + this.state.user.uid + '/courses/')
        .update(courses);
      commit('setUserDetails', this.state.userDetails);
    },
  },
  getters: {
    user: (state) => state.user,
    userDetails: (state) => state.userDetails,
  },
});
