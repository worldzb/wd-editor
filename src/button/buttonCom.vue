<template>
	<div id="#btn">
		<button type="">{{value}}</button>
		<txt></txt>
	</div>
</template>

<script>
	
	import txt from '../text/text.vue'

	export default{
		name:"btn",
		
		data(){
			return {
				btnName:"sublime"
			}
		},
		props:{
			value:{
				type:String,
				default:"按钮"
			}
		},
		methods:{
			changeV:function(){
				this.value="点击了"
			}
		},
		components:{
			txt
		}
	}
</script>