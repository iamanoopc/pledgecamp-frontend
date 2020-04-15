import Vue from 'vue';
import 'es6-promise/auto';
import Vuex from 'vuex';

import Toasted from 'vue-toasted';
import App from './App.vue';
import store from './store/store';

Vue.use(Vuex);
Vue.use(Toasted);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
