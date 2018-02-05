<template>
	<div class="codeEditor codeShow" contenteditable="false" @mouseover="msOver()">
		<div :class="{selectLang:isShow.isSelect}" v-show='isShow.language'>
			
			<div style="float: left">
				<a type="button" class="tag">
					<input type="text" name="" placeholder="tag">
				</a>
			</div>

			<div style="float:left">
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
			<div style="float: left">
				<a type="button"  class="btn btn-default dropdown-toggle lang" 
				data-toggle="dropdown">
					{{currentTheme}}
				</a>
				<ul class="dropdown-menu my-active" role="menu" style="height:55px">
					<li v-for="(item,index) in themeList" @click="switchTheme(index)">
						<a href="#">{{item}}</a>
					</li>
				</ul>
			</div>
			<div>
				<a type="button" class="btn btn-default lang" @click="isShow.body=!isShow.body">
					{{isShow.body?'隐藏主体':'显示'}}
				</a>
			</div>
		</div>
		<div v-show="isShow.body">
			<monaco-editor
			:height="height"
			:language="lang"
			:srcPath="srcPath"
			:code="code"
			:options="options"
			:highlighted="highlightLines"
			:changeThrottle="300"
			:theme="currentTheme"
			@mounted="onMounted"
			@codeChange="onCodeChange"
			>
			</monaco-editor>
		</div>

		<div class="hidden code">
<pre>
{{code}}
</pre>
		</div>

	</div>
</template>


<script type="text/javascript">
//代码显示编辑插件

	import domFunc from './domFunc.js';
	import monacoEditor from './Monaco.vue';
	import config from './config.js';
	
	export default{
		data(){
			return{
				//编辑的代码
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
				lang:'javascript',  			//当前语言
				language:config.language, 		//语言列表
				height:300,  //编辑器高度
				heightList:config.heightList,  	//高度列表
				themeList:[
					'vs','vs-dark'   			//主题列表
				],
				currentTheme:'vs', 				//当前主题
				srcPath:'',     				//插件CDN地址
				isShow:{						//显示开关列表
					language:false,
					isSelect:true,
					body:true,
				},
			}
		},
		props:{
			indexing:{
				type:Number,
				default:1,
			},
			code:{
				type:String,
				default:"error! loading is defeated",
			},
		},
		computed:{

		},
		components:{
		   monacoEditor,
		},
		created(){
			this.options = {
				selectOnLineNumbers: false
			};
			this.srcPath=config.cdnUrl; //设置插件 cdn 加载地址
		},
		mounted(){
			
		},
		methods:{
			onMounted(editor) {
				//console.log('after mount!', editor, editor.getValue(), editor.getModel());
				this.editor = editor;
			},
			onMounted2(editor) {
				//console.log('after mount!', editor, editor.getValue(), editor.getModel());
				this.editor2 = editor;
			},
			onCodeChange(editor) {
				this.container.register();
				this.code=this.editor.getValue();
			},
			onCodeChange2(editor) {
				//console.log('code changed!', 'code:' + this.editor2.getValue());
			},
			clickHandler() {
				//console.log('here is the code:', this.editor.getValue());
			},
			msOver(){
				this.isShow.language=true;
			},
			switchLang(index){
				this.lang=this.language[index].lang;
			},
			switchHeight(index){
				this.height=this.heightList[index];
			},
			switchTheme(index){
				this.currentTheme=this.themeList[index];
			}
		}
	}

</script>


<style type="text/css">
	.codeShow{
		border-top:1px solid #ddd;
		border-bottom:1px solid #ddd;
		border-right:1px solid #ddd;
		border-left:5px solid #ddd;
	}
	.selectLang{
		
	}
	.lang{
		padding: 2px 8px;
		height: 25px;
		width: 100px;
		font-family:'Consolas';
		
		border-bottom:2px solid #eee;
	}
	.tag input{
		padding: 2px 8px;
		height: 25px;
		width: 100px;
		font-family:'Consolas';
		border:none;
		border-bottom:2px solid #eee;
		outline: none;
		background: #eee
	}

</style>