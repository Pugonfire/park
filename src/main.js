import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import router from './router'

var firebaseConfig = {
    apiKey: "AIzaSyAr2Ui8lJqUuQInF1qwl2oP5eJjP0BpH84",
    authDomain: "park-af812.firebaseapp.com",
    projectId: "park-af812",
    storageBucket: "park-af812.appspot.com",
    messagingSenderId: "289604663167",
    appId: "1:289604663167:web:69ecaf62839e75efdfcc4a",
    measurementId: "G-WNQTL5KKNR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
