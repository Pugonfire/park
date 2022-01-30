<template>
  <h1>LOGIN</h1>
  <p>
    Sign in with Google <br />
    <button @click="socialLogin" class="social-button">
      <img alt="Google Logo" src="../assets/google-logo.png" />
    </button>
  </p>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  methods: {
    socialLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      // if login successful, bring to home page
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$router.replace("home");
        })
        .catch((err) => {
          alert("Oops. " + err.message);
        });
    },
  },
};
</script>

<style scoped>
.social-button {
  width: 75px;
  background: white;
  padding: 10px;
  border-radius: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  outline: 0;
  border: 0;
}
.social-button:active {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.social-button img {
  width: 100%;
}
</style>
