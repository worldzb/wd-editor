/*
* @Author: yang
* @Date:   2018-02-05 12:49:24
* @Last Modified by:   worldzb
* @Last Modified time: 2018-02-05 20:54:41
*/
import {Register,Create} from './kernel.js';


//容器
class Container{
	constructor(){
		this.comp=[];
	}
	static register(comp,dom){
		
	}
	static create(comp,props={},dom){
		
	}
}


//注册
Container.register(Register.codeShow,'#aaa');




export default Container;