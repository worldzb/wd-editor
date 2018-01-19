<template>
	<a type="button" class="btn btn-default" @click="test()" style="border-ra">
		<i class="fa fa-plus-square"></i>
		<small v-if="TextShow">加粗</small>
	</a>
</template>

<script>
	import config from '../config/config.js';
	import {mapGetters,mapActions} from 'vuex';
	import imgBox from '../components/imgBox/imgBox.vue';
	import Vue from 'vue';
	export default{
		name:'test',
		data(){
			return {
				TextShow:config.MenuTextShow
			}
		},
		/*methods:{
			test:function(){
				let imgBoxCom=Vue.extend(imgBox);
				let packString="<pre ><code class='language-css'>p { color: red }</code></pre>"
				//document.execCommand('insertHTML', false, '<br>');
				//document.execCommand('2D-Position',false,true);
				//document.execCommand("insertImage",true,'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1515681311&di=6208a887310508284ace8cd5c112126a&src=http://img1.50tu.com/meinv/xinggan/2013-11-16/e65e7cd83f37eed87067299266152807.jpg');
				document.execCommand('insertHTML', false, '<div id="imgBox"></div>');
				document.execCommand('insertHTML', false, '<br>');
				new imgBoxCom().$mount('#imgBox');
				
				document.execCommand('insertHTML', false, '<br>');
			}
		}*/
		methods:{
			...mapActions(['incre']),
			test(){
				this.incre({args:'hello worldzb'});
			}
		},
	}
</script>