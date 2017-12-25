<template>
	<div class="btn btn-default" @click="imageUpload()">
		<a>
			<i class="fa fa-file-image-o"></i>
			<small v-if="TextShow">图片</small>
		</a>
		<div id="model" :style="sty" v-if="isShow">
			<div class="header">
				<strong>图片上传</strong>
			</div>
		</div>
	</div>
</template>

<script>
	import config from '../config/config.js'
	export default{
		name:'imageUpload',
		data(){
			return {
				TextShow:config.MenuTextShow,
				isShow:false,
				sty:{

				}
			}
		},
		methods:{
			imageUpload:function(){
				this.isShow=!this.isShow;
				console.log(this)
				//document.execCommand("contentReadOnly",false,true);
				
			}
		}
	}
</script>

<style type="text/css">
	#model{
		width: 200px;
		height: 200px;
		background-color: #eee;
		position: absolute;
		margin: 0;
		padding: 0;
		top:33px;
		left: 0
	}
	.header{
		width: 100%;height: 20px;background-color: #ccc;text-align: left
	}
</style>