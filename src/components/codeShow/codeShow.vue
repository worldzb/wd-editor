<template>
	<div class="codeShow" contenteditable="true">
		
<pre class="language-css prismjsVes" contenteditable="true">
<code class="language-css" v-html='code'>
</code>
</pre> 
	
	<textarea class="inputCode" v-model='inpuCode' @input="runChang()" @keydown="enterKeyDown()" spellcheck="false">
			
	</textarea>
	</div>

</template>


<script type="text/javascript">
	import Prism from 'prismjs';
	function syncWH(){
		$('.codeShow textarea').css('height',$('.codeShow pre').height()+50);
		$('.codeShow textarea').css('width',$('.codeShow pre').width()+28);
	}






	export default{
		data(){
			return{
				code:"<html></html>",
				inpuCode:"",
			}
		},
		created(){
			syncWH();
		},
		methods:{
			runChang(){
				//console.log(this.inpuCode);
				this.code = Prism.highlight(this.inpuCode,Prism.languages.javascript);
			},
			enterKeyDown:function(event){
				let ev=event || window.event;
				if(ev.keyCode==13 || ev.keyCode==32){
					this.code = Prism.highlight(this.inpuCode,Prism.languages.javascript);
					syncWH();
				}
			}
		}
	}

</script>


<style type="text/css">
	.inputCode{
		position: absolute;
		text-shadow: 0 -.1em .2em black;
		font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
		padding-left: 14px;
		padding-top: 14px;
		resize: none;
		width: 100%;
		font-size:13px;
		overflow-y:hidden;
		outline: none;
		margin-top:7px;
		border-radius: 5px 5px;
		background-color:rgba(225,225,225,0);
		line-height: 1.5;
		border: none;
		color: #111;
		caret-color:#fff;

		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		word-wrap: normal;
		line-height: 1.5;

		-moz-tab-size: 4;
		-o-tab-size: 4;
		tab-size: 4;

		-webkit-hyphens: none;
		-moz-hyphens: none;
		-ms-hyphens: none;
		hyphens: none;
		opacity: 0.2

	}
	.codeShow{
		padding: 0;margin: 0;
		display: inline-block;
	}
	.prismjsVes{
		position: absolute;
		float: left;
		width: 100%
	}

</style>