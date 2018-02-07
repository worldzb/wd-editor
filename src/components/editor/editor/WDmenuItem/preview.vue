<template>
	<a type="button" class="btn btn-default" @click="preview()" style="border-ra">
		<i class="fa fa-eye"></i>
		<small v-if="TextShow">预览</small>
	</a>
</template>

<script>
import config from '../../config/config.js';
import getCon from '../WDcontent/getContent.js';

export default{
	name:'preview',
	data(){
		return{
			TextShow:config.MenuTextShow,
			getCon:'',
		}
	},
	computed:{},
	created(){
		
	},
	methods:{
		preview(){
			let getContent=new getCon({
				el:'#aaa'
			});
			getContent.getContent();
		},

	}
}
</script>

