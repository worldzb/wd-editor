<template>
	<div class="btn-group">
		<a type="button" class="btn btn-default dropdown-toggle fontFamily" 
		data-toggle="dropdown">
			<span class="fontShow">{{currentFont}}</span>
			<a href="">
				<i class="fa fa-caret-down"></i>
			</a>
		</a>
		<ul class="dropdown-menu my-active fontList" role="menu">
			<li v-for="(item,index) in fontFamilyArr" @click="setFontName(index)">
				<a href="javascript:;">{{item.name}}</a>
			</li>
		</ul>
	</div>
</template>

<script>
	import config from '../config/config.js';
	export default{
		name:'fontFamily',
		data(){
			return {
				TextShow:config.MenuTextShow,
				currentFont:'微软雅黑',
				fontFamilyArr:config.fontFace,//加载配置文件
			}
		},
		components:{
		},
		watch:{
			
		},
		methods:{
			fontFamily:function(){
				//alert("fds");
				this.tigger=true;
			},
			setFontName(index){
				let param=this.fontFamilyArr[index];
				this.currentFont=param.name;
				document.execCommand("FontName",false,param.class);  
			}
		}
	}
</script>

<style type="text/css">

	.fontFamily{
		background-color: #fff;
		font-size: 12px;
		padding: 7px 5px;
		width: 80px;
	}
	.fontShow{
		width: 50px;
		display: block;
		float: left;
		padding-top: 1px;
		overflow-x: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.my-active{
		overflow-y: auto
	}
	.fontList{
		height: 200px;
	}

</style>