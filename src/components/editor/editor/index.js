/*
* @Author: worldzb
* @Date:   2017-12-10 16:03:48
* @Last Modified by:   yang
* @Last Modified time: 2018-02-05 13:24:45
*/
import editorCom from './editor.vue';//导入editor组件
import editorStorePort from '../store/store.js';//导入组件store

const wdEditor={
	install:(Vue,options)=>{
		Vue.component("wd-editor",editorCom);
	}
}
if (typeof window !== 'undefined' && window.Vue) { window.Vue.use(wdEditor);}


//组件导出
export let editor=wdEditor;
export let editorStore= editorStorePort;
