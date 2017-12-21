<template>
	<button type="button" class="btn btn-default" @click="alignRight()">
		<i class="fa fa-align-right"></i>
		<small v-if="TextShow">右对齐</small>
	</button>
</template>

<script>
	import config from '../config/config.js'
	export default{
		name:'alignRight',
		data(){
			return {
				TextShow:config.MenuTextShow
			}
		},
		methods:{
			alignRight:function(){
				document.execCommand("justifyRight",false,null);
			}
		}
	}

</script>