import Vue from 'vue';
import 'es6-promise/auto';
import Vuex from 'vuex';

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import App from './App.vue';
import store from './store/store';

Vue.use(VueToast);
Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
