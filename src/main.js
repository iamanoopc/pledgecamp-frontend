import Vue from 'vue';
import 'es6-promise/auto';
import Vuex from 'vuex';

import VueToast from 'vue-toast-notification';
// Import any of available themes
import 'vue-toast-notification/dist/theme-default.css';
import Toasted from 'vue-toasted';
import App from './App.vue';
import store from './store/store';
// import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast);

// global

Vue.use(Vuex);
Vue.use(Toasted);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
