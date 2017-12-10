import Vue from 'vue'
import App from './App.vue'
import btn from './button'

Vue.use(btn);

new Vue({
  el: '#app',
  //router,
  template: '<App/>',
  components: { App }
})
