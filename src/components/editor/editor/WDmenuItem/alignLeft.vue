<template>
	<button type="button" class="btn btn-default" @click="alignLeft()">
		<i class="fa fa-align-left" ></i>
		<small v-if="TextShow">左对齐</small>
	</button>
</template>

<script>
	import config from '../../config/config.js'
	export default{
		name:'alignLeft',
		data(){
			return {
				TextShow:config.MenuTextShow
			}
		},
		methods:{
			alignLeft:function(){
				document.execCommand("justifyLeft",false,null);
			}
		}
	}

</script>