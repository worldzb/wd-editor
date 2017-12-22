<template>
	<a type="button" class="btn btn-default" @click="test()">
		<i class="fa fa-plus-square"></i>
		<small v-if="TextShow">加粗</small>
	</a>
</template>

<script>
	import config from '../config/config.js'
	export default{
		name:'test',
		data(){
			return {
				TextShow:config.MenuTextShow
			}
		},
		methods:{
			test:function(){
				//alert("fds");
				document.execCommand("insertText",false,"null");
			}
		}
	}
</script>