<template>
	<div class="btn-group">
		<a type="button" class="btn btn-default"  @click="code()">
			<i class="fa fa-code"></i>
			<small v-if="TextShow">代碼</small>
		</a>
	</div>
	
</template>


<script>
	import config from '../config/config.js';
	import codeShowCom from '../components/codeShow/codeShow.vue';
	import Vue from 'vue';
	export default{
		name:'wdCode',
		data(){
			return {
				TextShow:config.MenuTextShow
			}
		},
		methods:{
			code(){
				let codeShow=Vue.extend(codeShowCom);
				let packString="<div id='tagCodeShow'></div>";
				document.execCommand('insertHTML',false,'<div></div>');
				document.execCommand('insertHTML',false,'<br>');
				document.execCommand('insertHTML',false,packString);
				new codeShow().$mount('#tagCodeShow');
				
			}
		}
	}

</script>