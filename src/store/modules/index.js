/*
* @Author: worldzb
* @Date:   2018-01-08 20:52:24
* @Last Modified by:   worldzb
* @Last Modified time: 2018-02-04 02:20:31
*/
const state={
	editorContent:'haha',
};
const mutations={
	setEditorContent(state,arg){
		state.editorContent=arg;
	}
};
const actions={};
const getters={
	getEditorContent(state){
		return state.editorContent;
	}
};
const editorStore={
	state,
	mutations,
	actions,
	getters
}

export default editorStore;