import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'

import './assets/css/main.css';

import App from './App.vue'
import vSelect from 'vue-select';
import {Tabs, Tab} from 'vue-tabs-component';
import FlagIcon from 'vue-flag-icon'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

// components
Vue.component("v-select", vSelect);
import "vue-select/dist/vue-select.css";

Vue.component('tabs', Tabs);
Vue.component('tab', Tab);

import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

Vue.component('date-picker', DatePicker);

// plugins

Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.use(FlagIcon);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBIwzALxUPNbatRBj3Xi1Uhp0fFzwWNBkE',
    libraries: 'places',
  }
});

// router pages

import Home from '@/pages/Home'
import SignIn from '@/pages/SignIn'
import PasswordRecovery from '@/pages/PasswordRecovery'
import EmailSent from '@/pages/EmailSent'
import PasswordReset from '@/pages/PasswordReset'
import SignUp from '@/pages/SignUp'
import Profile from '@/pages/Profile'
import Search from '@/pages/Search'
import AdminZone from '@/pages/AdminZone'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/sign-in', name: 'sign-in', component: SignIn },
    { path: '/password-recovery', name: 'password-recovery', component: PasswordRecovery},
    { path: '/email-sent', name: 'email-sent', component: EmailSent},
    { path: '/password-reset', name: 'password-reset', component: PasswordReset},
    { path: '/sign-up', name: 'sign-up', component: SignUp},
    { path: '/profile', name: 'profile', component: Profile},
    { path: '/search', name: 'search', component: Search },
    { path: '/admin-zone', name: 'admin-zone', component: AdminZone},
  ]
})

// vue init

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')