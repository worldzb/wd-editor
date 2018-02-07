<template>
	<a type="button" class="btn btn-default" @click="outdent()">
		<i class="fa fa-outdent"></i>
		<small v-if="TextShow">加粗</small>
	</a>
</template>

<script>
	import config from '../../config/config.js'
	export default{
		name:'outdent',
		data(){
			return {
				TextShow:config.MenuTextShow
			}
		},
		methods:{
			outdent:function(){
				//alert("fds");
				document.execCommand("outdent",false,true);
				
			}
		}
	}
</script>