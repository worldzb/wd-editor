import Vue from 'vue'
import App from './App.vue'
import editor from './editor'
import store from './store/main.js'

Vue.use(editor);

new Vue({
  el: '#app',
  //router,
  store,
  template: '<App/>',
  components: { App }
})
