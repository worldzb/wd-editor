<template>
	<a type="button" class="btn btn-default" @click="indent()">
		<i class="fa fa-indent"></i>
		<small v-if="TextShow">增加缩进</small>
	</a>
</template>

<script>
	import config from '../../config/config.js'
	export default{
		name:'indent',
		data(){
			return {
				TextShow:config.MenuTextShow
			}
		},
		methods:{
			indent:function(){
				//alert("fds");
				document.execCommand("indent",false,true);
				
			}
		}
	}
</script>