import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CommonApi from './api.js'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import i18nPlugin from './plugins/i18n';
import store from './store';

const i18nStrings = {
  en: {
    hi: 'Hello!'
  },
  ko: {
    hi: '안녕하세요!'
  }
}

createApp(App)
.use(router)
.mixin(CommonApi)
.use(VueSweetalert2)
.use(i18nPlugin, i18nStrings)
.use(store)
.directive('focus', {
  mounted(el){
    el.focus();
  }
})
.mount('#app');

window.Kakao.init("0b70a4079411332bb8588341bd38644d");

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeM_BikyWnX_6nHF2KMSY8EwQ7BeofIHM",
  authDomain: "hdo-hisp-test.firebaseapp.com",
  projectId: "hdo-hisp-test",
  storageBucket: "hdo-hisp-test.appspot.com",
  messagingSenderId: "592847735500",
  appId: "1:592847735500:web:3fb14acb81e21fa36b1069",
  measurementId: "G-FZN4SGYCXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = 
getAnalytics(app);
*/