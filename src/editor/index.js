/*
* @Author: worldzb
* @Date:   2017-12-10 16:03:48
* @Last Modified by:   worldzb
* @Last Modified time: 2017-12-10 16:16:11
*/
import editorCom from './editor.vue'


const editor={
	install:(Vue,options)=>{
		Vue.component("wd-editor",editorCom);
	}
}

if (typeof window !== 'undefined' && window.Vue) { window.Vue.use(editor); }
export default editor;
