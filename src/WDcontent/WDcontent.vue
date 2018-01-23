<template>
	<div id="content" >
		<div class="mainBody" id="mb" contenteditable="true" :style="sty">
			<div v-html="test">
				
			</div>
		</div>
		
	</div>
</template>

<script type="text/javascript">

	import vue from 'vue';
	import {mapGetters,mapActions} from 'vuex';
	import store from '../store/main.js';
	import box from './modules/box.vue';

	export default{
		data(){
			return{
				test:'begin',
				color:'',
			}
		},
		components:{
			box:box,
		},
		computed:{
			...mapGetters(['download']),
			sty(){
				const fixedWidth = '100%';
				const fixedHeight = ($(window).height()-39)+'px';
				return {
					width:fixedWidth,
					height:fixedHeight
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
		min-height: 400px;
		outline: none;
		background-color: #fff;
		border: 1px solid #fff;
		font-size: 14px;
		overflow-y: auto;
		padding-left: 20px;
		padding-right: 20px;
		display: inline-block;
	}
	.mainBody>pre{
		width: 100%;
		display: inline-block;
	}

	
</style>