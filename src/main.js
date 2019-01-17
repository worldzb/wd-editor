import Vue from 'vue'
import App from './App.vue'
import {editor,editorStore} from './components/editor/editor/index.js'

import store from './store/main.js';

//import container from './editor/container/container.js'

Vue.use(editor);
//Vue.prototype.container=container;
store.registerModule('editor',editorStore);	//注册组件store

new Vue({
  el: '#app',
  //router,
  store,
  template: '<App/>',
  components: { App }
})
