import Vue from 'vue'
import App from './App.vue'
import {editor} from './editor'

import Vuex from 'vuex';
import store from './store/main.js';

Vue.use(editor);
Vue.use(Vuex);

new Vue({
  el: '#app',
  //router,
  store,
  template: '<App/>',
  components: { App }
})
