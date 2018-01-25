<template>
	<a id="textColor" type="button" class="btn fontFamily" @click="fontFamily()">
		<select class="" style="border:none">
			<option value="volvo">微软雅黑</option>
			<option value="saab">fds</option>
			<option value="opel">Opel</option>
			<option value="audi">Audfsdafasdfasdfi</option>
		</select>
		<small v-if="TextShow">背景色</small>
	</a>
</template>

<script>
	import config from '../config/config.js';
	export default{
		name:'fontFamily',
		data(){
			return {
				TextShow:config.MenuTextShow,
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
			}
		}
	}
</script>

<style type="text/css">

	.fontFamily{
		background-color: #fff;
		font-size: 12px;
		padding: 0;
		width: 80px;
		overflow-x: hidden;
	}
	.fontFamily select{
		padding: 8px 8px;
		outline: none;
	}
	.fontFamily select:hover{
		background-color: #eee
	}
</style>