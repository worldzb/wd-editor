<template>
	<a type="button" class="btn btn-default" @click="listUL()">
		<i class="fa fa-list-ul"></i>
		<small v-if="TextShow">无序列表</small>
	</a>
</template>

<script>
	import config from '../../config/config.js'
	export default{
		name:'listUL',
		data(){
			return {
				TextShow:config.MenuTextShow
			}
		},
		methods:{
			listUL:function(){
				//alert("fds");
				document.execCommand("insertUnorderedList",false,true);
				
			}
		}
	}
</script>