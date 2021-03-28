import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDgGhUI1TR0IZ-lp6EEu3Ff7gXTwDH3UwU",
    authDomain: "okazu-roulette.firebaseapp.com",
    projectId: "okazu-roulette",
    storageBucket: "okazu-roulette.appspot.com",
    messagingSenderId: "564698791532",
    appId: "1:564698791532:web:f40fb1c467567b8248e249",
    measurementId: "G-5FTFDXMHL3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
