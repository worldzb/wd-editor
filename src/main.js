import Vue from 'vue'
import App from './App.vue'
import editor from './editor'


Vue.use(editor);

new Vue({
  el: '#app',
  //router,
  template: '<App/>',
  components: { App }
})
