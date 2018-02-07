<template>
	<a type="button" class="btn btn-default" @click="test()" style="border-ra">
		<i class="fa fa-plus-square"></i>
		<small v-if="TextShow">加粗</small>
	</a>
</template>

<script>
	import config from '../../config/config.js'
	import {mapGetters,mapActions} from 'vuex';
	import imgBox from '../../components/imgBox/imgBox.vue';
	import Vue from 'vue';
	export default{
		name:'test',
		data(){
			return {
				TextShow:config.MenuTextShow
			}
		},
		methods:{
			test:function(){
				let imgBoxCom=Vue.extend(imgBox);
				let packString="<pre ><code class='language-css'>p { color: red }</code></pre>"
				//document.execCommand('open', false, null);
				//document.execCommand('insertHTML',false,"<div style='position: absolute;width:50px;height:50px;background:red'></div>");
				//document.execCommand('CreateLink',false,'www.worldzb.com');
				//document.execCommand('2D-Position',false,true);
				//document.execCommand('SelectAll',false,'<span>');
				//document.execCommand('SelectAll',false,'<span>');
				let selection = window.getSelection();
				console.log(selection);
			}
		}
		/*methods:{
			...mapActions(['incre']),
			test(){
				this.incre({args:'hello worldzb'});
			}
		},*/
	}
</script>

<style type="text/css">

</style>