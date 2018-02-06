<template>
	<div class=".codeEditor.codeShow">


<pre>
<code :class="language" v-html='code'>

</code>
</pre>



	</div>
</template>

<script type="text/javascript">

	import prismJS from 'prismjs';
	export default{
		name:'codeShow',
		props:{
			code:{
				type:String,
				default:'error! code loading  '
			},
			language:{
				type:String,
				default:'javascript'
			}
		},
		mounted(){
			//this.code = Prism.highlight(this.code, Prism.languages.javascript);
		},
		methods:{

		}
	}
</script>