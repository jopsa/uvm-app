<template>
  <div>
    <ion-content class="dark-color-background">
      <ion-title class="wrapper-title">
        <div class="cover-title">SIEE - UVM</div>
        <div class="cover-subtitle">Sistema Integral de Evaluación Educativa</div>
      </ion-title>
      <form onsubmit="processForm(event)" class="form-container">
        <ion-list lines="full" class="fields-inputs">
          <ion-item class="form-line">
            <ion-input placeholder="Nombre completo" required type="text" v-on:ionInput="handleNameChange($event)"></ion-input>
          </ion-item>
          <v-divider></v-divider>
          <ion-item class="form-line">
            <ion-input placeholder="Matrícula" required type="text" v-on:ionInput="handleMatriculaChange($event)"></ion-input>
          </ion-item>
          <v-divider></v-divider>
          <ion-item class="form-line">
            <ion-input required placeholder="Correo Electrónico" type="email" v-on:ionInput="handleEmailChange($event)"></ion-input>
          </ion-item>
          <v-divider></v-divider>
          <ion-item class="form-line">
            <ion-input
              required
              type="password"
              placeholder="Password"
              v-on:ionInput="handlePasswordChange($event)"
            ></ion-input>
          </ion-item>
        </ion-list>
        <div class="ion-padding buttons">
          <ion-button class="flat-button" @click="createAccount()">Crear Cuenta</ion-button>
          <ion-button @click="goToSignIn" fill="clear" class="text-button">¿Ya tienes una cuenta? Inicia sesión</ion-button>
        </div>
      </form>
    </ion-content>
    <ion-alert-controller></ion-alert-controller>
  </div>
</template>

<script>
  export default {
    name: 'sign-up',
    props: {},
    data: () => ({
      name: null,
      matricula: null,
      email: null,
      password: null,
    }),
    methods: {
      handleNameChange($event) {
        this.name = $event.target.value;
      },
      handleMatriculaChange($event) {
        this.matricula = $event.target.value;
      },
      handleEmailChange($event) {
        this.email = $event.target.value;
      },
      handlePasswordChange($event) {
        this.password = $event.target.value;
      },
      goToSignIn() {
        this.$router.push({ name: 'login' });
      },
      createAccount() {
        this.$store.dispatch('signUp', {
          email: this.email,
          password: this.password,
          matricula: this.matricula,
          name: this.name,
        });
      },
    },
  };
</script>
<style scoped>
  .wrapper-title {
    padding: 40px 0px;
    text-align: center;
  }
  .cover-subtitle {
    font-family: monospace;
    text-transform: uppercase;
  }
  .cover-title {
    font-family: 'Roboto';
    font-size: 36px;
    color: #57b3ed;
  }
</style>
