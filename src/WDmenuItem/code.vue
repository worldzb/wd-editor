<template>
	<div class="btn-group">
		<a type="button" class="btn btn-default"  @click="code()">
			<i class="fa fa-code"></i>
			<small v-if="TextShow">代碼</small>
		</a>
	</div>
	
</template>


<script>

	//代码编辑器创建
	import config from '../config/config.js';
	import codeShowCom from '../components/codeShow/codeShow.vue';
	import Vue from 'vue';

	import {mapMutations,mapGetters} from 'vuex';

	export default{
		name:'wdCode',
		data(){
			return {
				TextShow:config.MenuTextShow
			}
		},
		computed:{
			...mapGetters(['getArrCode']),
		},
		methods:{
			...mapMutations(['setArrCode']),
			code(){
				let packString="<div id='tagCodeShow'></div>";
				document.execCommand('insertHTML',false,'<div><br></div>');
				document.execCommand('insertHTML',false,packString);
				this.creatCodeShow();
			},
			creatCodeShow(){
				let arr=this.getArrCode;
				//console.log('code.vue ：'+arr.length);
				let codeShow=Vue.extend(codeShowCom);
				//创建codeShow 的时候，给每一个组件排个号
				if(arr.length===0){
					let res=new codeShow({
						propsData:{
							indexing:0,
							code:'function(){hello}',
						},

					}).$mount('#tagCodeShow');
					//console.log(res);
				}else{
					new codeShow({
						propsData:{
							indexing:arr.length,
							code:'//haha',
						},
					}).$mount('#tagCodeShow');
				}
				arr.push({
					code:''
				});
				this.setArrCode(arr);
				console.log('code.vue ：'+arr.length);
			}
		}
	}

</script>