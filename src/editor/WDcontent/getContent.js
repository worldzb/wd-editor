/*
* @Author: yang
* @Date:   2018-02-02 11:25:53
* @Last Modified by:   yang
* @Last Modified time: 2018-02-06 11:09:24
*/

/**
 * 内容获取，对编辑器内的内容进行替换整理，以便在普通页面可以注入
 */

import Vue from 'vue';  
import {Register} from '../container/kernel.js';


class GetContent{
	constructor(options){
		this.container=options.el;
		this.content='';
	}
	getCode(){
		//获取代码
		console.log($('.codeEditor.codeShow').length);
		console.log($('.hidden.code').length);

		//获取代码列表
		let arrCode=[];   //代码列表
		let arrLang=[];   //代码语言
		$('.hidden.code').each(function(i){
			arrCode.push($.trim($(this).html()));
			arrLang.push($(this).attr('value'));
		})
		console.log(arrCode);
		console.log(arrLang);
		//依次替换
		for(let i=0;i<arrCode.length;i++){
			new Register.code({
				propsData:{
					code:arrCode[i],
					language:arrLang[i]
				}
			}).$mount('.codeEditor.codeShow')
		}
		this.content=$('#mb').html();
	}

	getImage(){
		console.log($('.imgBox').length);
		let arrImg=[];	//
		$('.imgBox').each(function(i){
			arrImg.push($(this).html());
		});

		for(let i=0;i<arrImg.length;i++){
			new Register.imageBox({
				propsData:{
					content:arrImg[i],
				}
			}).$mount('.imgBox');
		}
	}

	getContent(){
		this.getCode();
		this.getImage();
	}
}

export default GetContent;