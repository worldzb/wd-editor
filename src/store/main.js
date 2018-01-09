/*
* @Author: worldzb
* @Date:   2018-01-08 20:51:59
* @Last Modified by:   worldzb
* @Last Modified time: 2018-01-09 22:11:54
*/
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let state={
	count:'vuex',
}

const actions={
	incre:({commit})=>{
		alert('actions');
		commit('incre');
	}
}

const mutations ={
	incre(state){
		state.count="worldzb";
	}
}

const getters={
	download(state){
		return state.count;
	}
}


const store=new Vuex.Store({
	state,
	actions,
	mutations,
	getters
});

export default store;