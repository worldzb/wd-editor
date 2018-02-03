<template>
	<a type="button" class="btn btn-default" @click="preview()" style="border-ra">
		<i class="fa fa-eye"></i>
		<small v-if="TextShow">预览</small>
	</a>
</template>

<script>
import config from '../config/config.js';
import GetContent from '../WDcontent/getContent.js';
import {mapMutations,mapGetters} from 'vuex';
export default{
	name:'preview',
	data(){
		return{
			TextShow:config.MenuTextShow,
			getCon:'',
		}
	},
	computed:{
		...mapGetters(['getEditorContent']),
	},
	created(){
		this.getCon=new GetContent({
			el:'#mb',
		});
	},
	methods:{
		...mapMutations(['setEditorContent']),
		preview(){
			this.setEditorContent($('.mainBody').html());
			alert(this.getEditorContent);
		},

	}
}
</script>

