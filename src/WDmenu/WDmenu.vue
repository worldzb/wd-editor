<template>
	<div id="menu">
		<div class="btn-group">
			<bold></bold>
			<italic></italic>
			<underline></underline>
			<heading></heading>
			<text-color></text-color>
			<font-bgc></font-bgc>
			<font-family></font-family>
			<alignCenter></alignCenter>
			<alignLeft></alignLeft>
			<alignRight></alignRight>
			<listOL></listOL>
			<listUL></listUL>
			<indent></indent>
			<outdent></outdent>
			<imageUpload></imageUpload>
			<wd-code></wd-code>
			<horizontal></horizontal>
			<about></about>
			<preview></preview>
			<test></test>
		</div>
	</div>
	
</template>

<script>
	import Config from "../config/export.js";
	console.log(typeof Config);

	export default{
		data(){
			return{
				size:1,
				input:""
			}
		},
		methods:{

		},
		props:{
			value:{
				type:String,
				default:"nothing"
			}
		},
		components:Config.comp,
	}
</script>


<style type="text/css">

::-webkit-scrollbar{
  	width: 10px;
 	background-color: red;
} 
::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
	background: #535353;
}
::-webkit-scrollbar-track {/*滚动条里面轨道*/
    border-left: 1px solid #ccc;
    background: #EDEDED;
}
	#menu{
		background-color: #eee;border-bottom: 1px solid #ddd;
	}
	.test{
		width: 200px;
		height: 200px;
		background-color: red
	}
	button{
		cursor: pointer;
		outline:none
	}
	.btn{
		border:none;
		border-radius: 0
	}


</style>