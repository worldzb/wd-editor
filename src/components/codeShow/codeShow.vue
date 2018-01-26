<template>
	<div id="codeEditor" class="codeShow" contenteditable="false" @mouseover="msOver()">
		<div :class="{selectLang:isShow.isSelect}" v-show='isShow.language'>
			<div style="float: left">
				<a type="button" class="btn btn-default dropdown-toggle lang" 
				data-toggle="dropdown">
					{{lang}}
				</a>
				<ul class="dropdown-menu my-active" role="menu" style="height:200px">
					<li v-for="(item,index) in language" @click="switchLang(index)">
						<a href="#">{{item.lang}}</a>
					</li>
				</ul>
			</div>
			<div>
				<a type="button" class="btn btn-default dropdown-toggle lang" 
				data-toggle="dropdown">
					{{height}}
				</a>
				<ul class="dropdown-menu my-active" role="menu" style="height:200px">
					<li v-for="(item,index) in heightList" @click="switchHeight(index)">
						<a href="#">{{item}}</a>
					</li>
				</ul>
			</div>
		</div>
		<monaco-editor
			:height="height"
	        :language="lang"
	        srcPath="https://cdn.bootcss.com/monaco-editor/0.10.1/min"
	        :code="code"
	        :options="options"
	        :highlighted="highlightLines"
	        :changeThrottle="500"
	        theme="vs"
	        @mounted="onMounted"
	        @codeChange="onCodeChange"
		>
		</monaco-editor>
	</div>
</template>


<script type="text/javascript">
	import domFunc from './domFunc.js';
	import monacoEditor from './Monaco.vue';
	import config from './config.js';
	export default{
		data(){
			return{
				code: '// type your code \n',
				highlightLines: [
					{
						number: 0,
						class: 'primary-highlighted-line'
					},
					{
						number: 0,
						class: 'secondary-highlighted-line'
					}
				],
				lang:'javascript',
				language:config.language,
				height:600,
				heightList:config.heightList,

				isShow:{
					language:false,
					isSelect:true,
				}
			}
		},
		components:{
		   monacoEditor,
		},
		created(){
			this.options = {
				selectOnLineNumbers: false
			};
		},
		mounted(){
			this.init();
		},
		methods:{
			init(){
				
			},
			onMounted(editor) {
				console.log('after mount!', editor, editor.getValue(), editor.getModel());
				this.editor = editor;
			},
			onMounted2(editor) {
				console.log('after mount!', editor, editor.getValue(), editor.getModel());
				this.editor2 = editor;
			},
			onCodeChange(editor) {
				console.log('code changed!', 'code:' + this.editor.getValue());
			},
			onCodeChange2(editor) {
				console.log('code changed!', 'code:' + this.editor2.getValue());
			},
			clickHandler() {
				console.log('here is the code:', this.editor.getValue());
			},
			msOver(){
				this.isShow.language=true;
			},
			switchLang(index){
				this.lang=this.language[index].lang;
			},
			switchHeight(index){
				this.height=this.heightList[index];
			}
		}
	}

</script>


<style type="text/css">
	.codeShow{
		border-left:5px solid #ddd;
	}
	.selectLang{
		margin-left: 6%;
	}
	.lang{
		padding: 2px 8px;
		height: 25px;
		width: 100px;
		font-family:'Consolas';
		border-top:2px solid #eee;
		border-bottom:2px solid #eee;
	}

</style>