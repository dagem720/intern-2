import Vue from 'vue'
import App from './App.vue'
import router from './Routes'
import store from './store/index'
import vuetify from './plugins/vuetify'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import firebase from 'firebase/app';
require('firebase/auth');
Vue.use(Toast);

const firebaseConfig = {
  apiKey: "AIzaSyBcFVyVt3rTI-6fDNu1Ckk2l8PiQ-e0j20",
  authDomain: "auth2-16e2e.firebaseapp.com",
  databaseURL: "https://auth2-16e2e.firebaseio.com",
  projectId: "auth2-16e2e",
  storageBucket: "auth2-16e2e.appspot.com",
  messagingSenderId: "691797125444",
  appId: "1:691797125444:web:0a7ddd6fe16dd01f6fcf11",
  measurementId: "G-WCZLK7ESDN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




Vue.config.productionTip = false
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
  
});

let app;
firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app=new Vue({
      router,
      vuetify,
      store,
      render: h => h(App),
      
    }).$mount('#app')
  }
})