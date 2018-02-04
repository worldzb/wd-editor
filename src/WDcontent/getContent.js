/*
* @Author: yang
* @Date:   2018-02-02 11:25:53
* @Last Modified by:   worldzb
* @Last Modified time: 2018-02-04 16:31:24
*/

/**
 * 内容获取，对编辑器内的内容进行替换整理，以便在普通页面可以注入
 */
import showCode from './modules/showCode.vue';
import showImg from './modules/showImg.vue';
import Vue from 'vue';  

class GetContent{
	constructor(options){
		this.container=options.el;
		this.content='';
	}
	getCode(){
		$('#codeEditor').html();
		alert(typeof $(' #codeEditor'));
	}
	getContent(){
		this.getCode();
	}
}

export default GetContent;