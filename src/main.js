import Vue from 'vue';
import 'es6-promise/auto';
import Vuex from 'vuex';

import Dropdown from 'bp-vuejs-dropdown';

import Toasted from 'vue-toasted';
import App from './App.vue';
import store from './store/store';

// global
Vue.use(Dropdown);

Vue.use(Vuex);
Vue.use(Toasted);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
