<template>
	<div class="btn-group">
		<a type="button" class="btn btn-default dropdown-toggle fontFamily" 
		data-toggle="dropdown">
			<span class="fontShow">{{currentFont}}</span>
			<a href="">
				<i class="fa fa-caret-down"></i>
			</a>
		</a>
		<ul class="dropdown-menu active fontList" role="menu">
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
				fontFamilyArr:[
					{name:"微软雅黑",class:"YaHei"},
					{name:"宋体",class:"SimSun"},
					{name:"Courier New",class:"'Courier New', Courier, monospace"},
					{name:"Times new roman",class:"Times new roman"},
					{name:"新宋体",class:"NSimSun"},
					{name:"仿宋",class:"FangSong"},
					{name:"楷体",class:"KaiTi"},
					{name:"隶书",class:"LiSu"},
					{name:"幼圆",class:"YouYuan"},
					{name:"华文琥珀",class:"STHupo"},
					{name:"华文彩云",class:"STCaiyun"},
					{name:"Consoles",class:"Consolas, Monaco, monospace"},
					{name:"Arial",class:"Arial, Helvetica, sans-serif"},
					{name:"Arial Black",class:"Gadget, sans-serif"},
					{name:"Comic Sans MS",class:"'Comic Sans MS', cursive, sans-serif"},
					{name:"Impact",class:"Impact, Charcoal, sans-serif"},
					{name:"Verdana",class:"Verdana, Geneva, sans-serif"},
				]
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
	.active{
		overflow-y: auto
	}
	.fontList{
		height: 200px;
	}

</style>