<template>
	<div id="content">
		<div class="mainBody" id="mb" contenteditable="true" :style="style">
			
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				style:{
					width:'',
				}
			}
		},
		props:{
			width:{
				type:String,
				default:"100%"
			},
			height:{
				type:String,
				default:"200px"
			}
		},
		created:function(){
			this.style={
				width:this.width,
			}
		}
	}
</script>

<style type="text/css">
	.mainBody{
		width: 100%;
		min-height: 200px;
		outline: none;
		background-color: #fff;
		border: 1px solid #eee;
		font-size: 20px;
		overflow-y: auto;
	}
</style>