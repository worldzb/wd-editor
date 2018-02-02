/*
* @Author: yang
* @Date:   2018-02-02 11:25:53
* @Last Modified by:   yang
* @Last Modified time: 2018-02-02 16:51:41
*/

/**
 * 内容获取，对编辑器内的内容进行替换整理，以便在普通页面可以注入
 */

class GetContent{
	constructor(options){
		this.container=options.el;
		this.content='';
	}
	getCode(){
		$('#codeEditor').html();
		console.log(typeof $('#codeEditor'));
	}
	getContent(){
		this.getCode();
	}
}

export default GetContent;