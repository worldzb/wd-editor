/*
* @Author: worldzb
* @Date:   2018-01-08 20:51:59
* @Last Modified by:   yang
* @Last Modified time: 2018-01-19 10:02:36
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


const store=new Vuex.Store({
	state,
	actions,
	mutations,
	getters
});

export default store;