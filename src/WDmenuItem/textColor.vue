<template>
	<a id="textColor" type="button" class="btn btn-default" @click="textColor()" style="padding: 0">
		<color-picker v-model="color" ></color-picker>
		<small v-if="TextShow">文字颜色</small>
	</a>
</template>

<script>
	import config from '../config/config.js';
	import colorPicker from '../components/colorPicker/colorPickerToFontColor.vue';
	export default{
		name:'listOL',
		data(){
			return {
				TextShow:config.MenuTextShow,
				color:"",
			}
		},
		components:{
			colorPicker,
		},
		watch:{
			color:(val)=>{
				 document.execCommand("foreColor",false,`${val}`);
			}
		},
		methods:{
			textColor:function(){
				//alert("fds");
				this.tigger=true;
			}
		}
	}
</script>

<style type="text/css">
	
</style>