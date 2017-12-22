<template>
	<a type="button" class="btn btn-default" @click="underline()">
		<i class="fa fa-underline"></i>
		<small v-if="TextShow">下划线</small>
	</a>
</template>

<script>
	import config from '../config/config.js'
	export default{
		name:'underline',
		data(){
			return {
				TextShow:config.MenuTextShow
			}
		},
		methods:{
			underline:function(){
				//alert("fds");
				document.execCommand("underline",false,null);
			}
		}
	}
</script>