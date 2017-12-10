/*
* @Author: worldzb
* @Date:   2017-12-10 13:03:25
* @Last Modified by:   worldzb
* @Last Modified time: 2017-12-10 13:15:00
*/
import buttonCom from './buttonCom.vue';

const btn={
	install:function(Vue){
		Vue.component('btn',buttonCom);
	}
}
if (typeof window !== 'undefined' && window.Vue) { window.Vue.use(btn); }
export default btn;