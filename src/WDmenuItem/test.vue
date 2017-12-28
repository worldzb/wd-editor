<template>
	<a type="button" class="btn btn-default" @click="test()" style="border-ra">
		<i class="fa fa-plus-square"></i>
		<small v-if="TextShow">加粗</small>
	</a>
</template>

<script>
	import indent from './indent.vue'
	import config from '../config/config.js'
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
				//alert("fds");
				document.execCommand("insertHTML",false,"<div class='panel panel-default'><div class='panel-body' contenteditable='true' style='padding:0;margin:0;'><pre style='padding:0;margin:0;height:30px;border:none;border-radius:0'><span>1</span></pre></div></div>");
				//document.execCommand("insertBrOnReturn",false,false);
				
			}
		}
	}
</script>