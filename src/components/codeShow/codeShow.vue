<template>
	<div id="codeEditor" class="codeShow">
	</div>
</template>


<script type="text/javascript">
	import domFunc from './domFunc.js';
	import Loader from './loader.js';
	export default{
		data(){
			return{
				
			}
		},
		components:{
		   
		},
		created(){
			
		},
		mounted(){
			this.init();
		},
		methods:{
			init(){
				console.log(typeof Loader.load());
			}
		}
	}

</script>


<style type="text/css">
	

</style>