/*
* @Author: worldzb
* @Date:   2018-01-08 20:52:24
* @Last Modified by:   worldzb
* @Last Modified time: 2018-02-04 22:11:09
*/
const state={
	editorContent:'<div>开始你的文档</div>',   //编辑器body
	clearUpDocument:false,          //是否整理文档
	arrCode:[],//代码列表
	noCodeNumber:0,//code 序号
	arrImage:[]//图片列表
};
const mutations={
	setEditorContent(state,arg){
		state.editorContent=arg;
	},
	setClearUpDoc(state,arg){
		state.clearUpDocument=arg;
	},
	setArrCode(state,arg){
		state.arrCode=arg;
	},
	setArrImage(state,arg){
		state.arrImage=arg;
	}
};
const actions={};
const getters={
	getEditorContent(state){
		return state.editorContent;
	},
	getClearUpDoc(state){
		return state.clearUpDocument;
	},
	getArrCode(state){
		return state.arrCode;
	},
	getArrImage(state){
		return state.arrImage;
	},
};
const editorStore={
	state,
	mutations,
	actions,
	getters
}

export default editorStore;