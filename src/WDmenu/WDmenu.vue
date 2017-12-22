<template>
	<div id="menu">
		<div class="btn-group">
			<bold></bold>
			<italic></italic>
			<underline></underline>
			<alignCenter></alignCenter>
			<alignLeft></alignLeft>
			<alignRight></alignRight>
			<test></test>

			<!-- <button type="button" class="btn btn-default">
				<i class="fa fa-align-left"></i>
				<small v-if="textShow">左对齐</small>
			</button>
			<button type="button" class="btn btn-default">
				<i class="fa fa-align-right"></i>
				<small v-if="textShow">右对齐</small>
			</button>
			<button type="button" class="btn btn-default">
				<i class="fa fa-align-justify"></i>
				<small v-if="textShow">两边对齐</small>
			</button>
			<button type="button" class="btn btn-default" @click="showCode()">
				<i class="fa fa-save"></i>
				<small v-if="textShow">两边对齐</small>
			</button> -->
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
				textShow:false,
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
	#menu{
		background-color: #eee
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
	
</style>