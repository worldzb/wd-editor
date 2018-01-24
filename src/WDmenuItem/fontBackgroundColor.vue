<template>
	<a id="textColor" type="button" class="btn btn-default" @click="bgColor()" style="padding:0">
		<color-picker v-model="color" ></color-picker>
		<small v-if="TextShow">背景色</small>
	</a>
</template>

<script>
	import config from '../config/config.js';
	import colorPicker from '../components/colorPicker/colorPickerToBackgroundColor.vue';
	export default{
		name:'bgColor',
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
				 document.execCommand("backColor",false,`${val}`);
			}
		},
		methods:{
			bgColor:function(){
				//alert("fds");
				this.tigger=true;
			}
		}
	}
</script>

<style type="text/css">
	
</style>