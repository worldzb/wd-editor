<template>
	<div class="codeShow">
		<div>
			
		</div>
		<div>

<pre class="language-javascript prismjsVes" contenteditable="true">
<code class="language-javascript" v-html='code'>
</code>
</pre> 
			<textarea class="inputCode" v-model='inpuCode' @input="runChang()" @keydown="enterKeyDown()" spellcheck="false" rows="1">
			</textarea>
		</div>
</div>

</template>


<script type="text/javascript">
	import Prism from 'prismjs';
	import domFunc from './domFunc.js';
	export default{
		data(){
			return{
				code:"<html></html>",
				inpuCode:"",
				codeEditerHeight:'',
				linesNumber:'',
			}
		},
		created(){
			
		},
		mounted(){
			
		},
		methods:{
			runChang(){
				//console.log(this.inpuCode);
				this.code = Prism.highlight(this.inpuCode,Prism.languages.javascript);
			},
			enterKeyDown:function(event){
				let ev=event || window.event;
				//|| ev.keyCode==32 || ev.keyCode==8
				if(ev.keyCode==13){
					this.code = Prism.highlight(this.inpuCode,Prism.languages.javascript);
					//alert(domFunc.setCss('.codeShow pre','height'));
				}else if(ev.keyCode==8){
				}
			}
		}
	}

</script>


<style type="text/css">
	.inputCode{
		position: absolute;
		font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
		
		resize: none;
		width: 95%;
		font-size:13px;
		overflow-y:hidden;
		outline: none;
		background-color:rgba(225,225,225,0);
		line-height: 1.5;
		color: #fff;
		caret-color:#fff;
		padding: 13px;
		border-radius: 0.3em;
		opacity: 0.2;

	}
	.codeShow{
		padding: 0;margin: 0;
		display: inline-block;
		width: 100%;
		background: red;
		clear : none | left|right| both;
	}
	.prismjsVes{
		float: left;
		width: 95%;
	}


code[class*="language-"],
pre[class*="language-"] {
	color: #f8f8f2;
	text-shadow: 0 1px rgba(0, 0, 0, 0.3);
	font-family: Consolas, Monaco, 'Andale Mono', monospace;
	direction: ltr;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	overflow: auto;
	width: 95%;
	border-radius: 0.3em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #272822;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: slategray;
}

.token.punctuation {
	color: #f8f8f2;
}

.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
	color: #f92672;
}

.token.boolean,
.token.number {
	color: #ae81ff;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #a6e22e;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
	color: #f8f8f2;
}

.token.atrule,
.token.attr-value,
.token.function {
	color: #e6db74;
}

.token.keyword {
	color: #66d9ef;
}

.token.regex,
.token.important {
	color: #fd971f;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}




</style>