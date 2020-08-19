import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';

Vue.config.productionTip = false;

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBJgHzAdHSpvKJur9wMxi25STIa52dEoTY",
    authDomain: "printinc-1af0d.firebaseapp.com",
    databaseURL: "https://printinc-1af0d.firebaseio.com",
    projectId: "printinc-1af0d",
    storageBucket: "printinc-1af0d.appspot.com",
    messagingSenderId: "550932902863",
    appId: "1:550932902863:web:b0e1b9afe7482baf6518ba",
    measurementId: "G-Q1L0CNK72W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  let app:Object;

  firebase.auth().onAuthStateChanged(user=>{
    if (!app){
      app = new Vue({
        router,
        store,
        render: (h) => h(App)
      }).$mount('body');
    }
  })


