<template>
	<a type="button" class="btn btn-default" @click="italic()">
		<i class="fa fa-italic"></i>
		<small v-if="TextShow">倾斜</small>
	</a>
</template>

<script>
	import config from '../config/config.js'
	export default{
		name:'italic',
		data(){
			return {
				TextShow:config.MenuTextShow
			}
		},
		methods:{
			italic:function(){
				document.execCommand("Italic",false,null);
			}
		}
	}

</script>