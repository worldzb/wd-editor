<template>
	<a type="button" class="btn btn-default" @click="test()" style="border-ra">
		<i class="fa fa-plus-square"></i>
		<small v-if="TextShow">加粗</small>
	</a>
</template>

<script>
	import indent from './indent.vue';
	import config from '../config/config.js';
	import {mapGetters,mapActions} from 'vuex';
	export default{
		name:'test',
		data(){
			return {
				TextShow:config.MenuTextShow
			}
		},
		components:{
			indent:indent,
		},
		methods:{
			test:function(){
				let dt="http://www.worldzb.cn/www/lt/Public/images/logo.jpg";
				let packString="<img src='"+dt+"'>";
				document.execCommand("insertHTML",false,packString);
			}
		}
		/*methods:mapActions([
			'incre',
		]),*/
	}
</script>