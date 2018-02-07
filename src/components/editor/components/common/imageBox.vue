<template>
	<div v-html='content'>
		
	</div>
</template>

<script type="text/javascript">
	export default{
		props:{
			class:{
				type:String,
				default:''
			},
			url:{
				type:String,
				default:'',
			},
			content:{
				type:String,
				default:''
			}
		}
	}
</script>