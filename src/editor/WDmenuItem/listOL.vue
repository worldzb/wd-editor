<template>
	<a type="button" class="btn btn-default" @click="listOL()">
		<i class="fa fa-list-ol"></i>
		<small v-if="TextShow">有序列表</small>
	</a>
</template>

<script>
	import config from '../../config/config.js'
	export default{
		name:'listOL',
		data(){
			return {
				TextShow:config.MenuTextShow
			}
		},
		methods:{
			listOL:function(){
				//alert("fds");
				document.execCommand("insertOrderedList",false,'一');
				
			}
		}
	}
</script>