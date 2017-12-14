<template>
	<button type="button" class="btn btn-default">
		<i class="fa fa-align-center" @click="alignCenter()"></i>
		<small v-if="TextShow">居中</small>
	</button>
</template>

<script>
	import config from '../config/config.js'

	export default{
		name:'alignCenter',
		data(){
			return {
				TextShow:config.MenuTextShow
			}
		},
		methods:{
			alignCenter:function(){
				document.execCommand("Delete",false,null);
			}
		}
		
	}

</script>