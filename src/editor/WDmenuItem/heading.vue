<template>
	<div class="btn-group">
		<a type="button" class="btn btn-default dropdown-toggle" 
		data-toggle="dropdown">
			 <i class="fa fa-header"></i>
			<small v-if="TextShow">标题</small>
		</a>
		<ul class="dropdown-menu my-active" role="menu">
			<li @click="h1()"><a href="#"><h1>一级标题</h1></a></li>
			<li @click="h2()"><a href="#"><h2>二级标题</h2></a></li>
			<li @click="h3()"><a href="#"><h3>三级标题</h3></a></li>
			<li @click="p()"><a href="#"><h4>正文</h4></a></li>
		</ul>
	</div>


</template>

<script>
	import config from '../../config/config.js'
	export default{
		name:'wdHeader',
		data(){
			return {
				TextShow:config.MenuTextShow
			}
		},
		components:{
		},
		methods:{
			header:function(){
				//alert("fds");
				document.execCommand("formatBlock",false,'h3');
				//document.execCommand("insertBrOnReturn",false,false);
			},
			h1:()=>{
				document.execCommand("formatBlock",false,'h1');
			},
			h2:()=>{
				document.execCommand("formatBlock",false,'h2');
			},
			h3:()=>{
				document.execCommand("formatBlock",false,'h3');
			},
			p:()=>{
				document.execCommand("formatBlock",false,'p');
			},
		}
	}
</script>

<style type="text/css">
	.my-active{
		border-radius: 0;padding:0;
	}
	.my-active li a{
		background: #fff;
	}
	.my-active li a:hover{
		background: #6495ED;
		color:white;
	}
</style>