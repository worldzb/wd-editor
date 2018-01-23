<template>
	<div id="codeEditor" class="codeShow">
		<div>
			语言：
			<select>
				<option value="volvo">Volvo</option>
				<option value="saab">Saab</option>
				<option value="opel">Opel</option>
				<option value="audi">Audi</option>
			</select>
			大小：
			<select>
				<option value="volvo">Volvo</option>
				<option value="saab">Saab</option>
				<option value="opel">Opel</option>
				<option value="audi">Audi</option>
			</select>
		</div>
		<monaco-editor
			height="200"
	        language="typescript"
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
				]
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
			}
		}
	}

</script>


<style type="text/css">
	.codeShow{
		border:1px solid #aaa;
	}
</style>