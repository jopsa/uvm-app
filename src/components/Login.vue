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
            <ion-input required type="email" placeholder="Email" v-on:ionInput="handleEmailChange($event)"></ion-input>
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
          <ion-button @click="login()" class="flat-button">Iniciar sesión</ion-button>
          <ion-button @click="goToSignUp" fill="clear" class="text-button"
            >¿No tienes una cuenta? Regístrate</ion-button
          >
        </div>
      </form>
    </ion-content>
    <ion-alert-controller></ion-alert-controller>
  </div>
</template>

<script>
  export default {
    name: 'login',
    props: {},
    data: () => ({
      email: null,
      password: null,
    }),
    methods: {
      handleEmailChange($event) {
        this.email = $event.target.value;
      },
      handlePasswordChange($event) {
        this.password = $event.target.value;
      },
      goToSignUp() {
        this.$router.push({ name: 'sign-up' });
      },
      async login() {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
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
