/*
* @Author: worldzb
* @Date:   2018-01-08 20:51:59
* @Last Modified by:   worldzb
* @Last Modified time: 2018-02-17 01:21:52
*/
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let state={
	count:'vuex',
}

const actions={
	incre:({commit},...args)=>{
		console.log(args[0].args);
		commit('incre',"haha");
	}
}


//状态修改，添加
const mutations ={
	incre(state,a){
		state.count=a;
	}
}

//状态读出，获取
const getters={
	download(state){
		return state.count;
	}
}

const modules={
}

const store=new Vuex.Store({
	modules,
	state,
	actions,
	mutations,
	getters
});

export default store;