<template>
	<button type="button" class="btn btn-default" @click="bold()">
		<i class="fa fa-bold"></i>
		<small v-if="TextShow">加粗</small>
	</button>
</template>

<script>
	import config from '../config/config.js'
	export default{
		name:'bold',
		data(){
			return {
				TextShow:config.MenuTextShow
			}
		},
		methods:{
			bold:function(){
				document.execCommand("Bold",false,null);
			}
		}
	}

</script>