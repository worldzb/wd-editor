<template>
	<button type="button" class="btn btn-default" @click="horizontal()">
		<strong>---</strong>
		<small v-if="TextShow">水平线</small>
	</button>
</template>

<script>
	import config from '../../config/config.js'
	export default{
		name:'horizontal',
		data(){
			return {
				TextShow:config.MenuTextShow
			}
		},
		methods:{
			horizontal:function(){
				document.execCommand("insertHorizontalRule",false,null);
			}
		}
	}

</script>