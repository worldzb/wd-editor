<template>
	<div id="box" @click="changeSty" :style="sty">
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				sty:{
					width:'100px'
				}
			}
		},
		methods:{
			changeSty:()=>{
				this.sty={
					width:'300px'
				}
			}
		}
	}
</script>

<style type="text/css">
	#box{
		width: 100px;height: 100px; background: red
	}
</style>