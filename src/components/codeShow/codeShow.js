/*
* @Author: yang
* @Date:   2018-02-05 11:01:21
* @Last Modified by:   yang
* @Last Modified time: 2018-02-05 11:04:44
*/
import codeShowCom from './codeShow.vue';

const codeShow={
	install:(Vue,options)=>{
		Vue.component('codeShow',codeShowCom);
	}
}
if (typeof window !== 'undefined' && window.Vue) { window.Vue.use(codeShow);}


export default codeShow;