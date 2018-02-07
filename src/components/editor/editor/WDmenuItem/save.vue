<template>
	<a type="button" class="btn btn-default" @click="save()">
		<i class="fa fa-save"></i>
		<small v-if="TextShow">保存</small>
	</a>
</template>

<script>
	import config from '../../config/config.js'
	import getContent from '../WDcontent/getContent.js'
	export default{
		name:'save',
		data(){
			return {
				TextShow:config.MenuTextShow
			}
		},
		methods:{
			save:function(){
				
			}
		}
	}

</script>