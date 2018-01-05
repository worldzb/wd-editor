<template>
	<div class="btn-group">
		<a type="button" class="btn btn-default dropdown-toggle" 
		data-toggle="dropdown" @click="about()">
			 <i class="fa fa-exclamation-circle"></i>
			<small v-if="TextShow">图片</small>
		</a>
		<div class="modal fade" id="aboutModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						<h4 class="modal-title" id="myModalLabel"><strong>WD-Editor关于</strong></h4>
					</div>
					<div class="modal-body">
						<p><strong style="font-size: 18px">名称</strong>：WD-Editor</p>
						<p><strong style="font-size: 18px">版本号</strong>：{{version}}</p>
						<p><strong style="font-size: 18px">作者</strong>：worldzb</p>
						<p><strong style="font-size: 18px">官网地址</strong>：<a href="http://www.worldzb.cn">www.worldzb.cn</a></p>
						<p><strong style="font-size: 18px">GitHub地址</strong>：<a href="https://github.com/worldzb/wd-editor">WD-Editor</a></p>
						<p><strong style="font-size: 18px">简介</strong>：WD-Editor是一款开源免费的网页富文本编辑器，使用 <strong>Vue2.0</strong>+<strong>Bootstrap3.0</strong> 构建。图标使用 <strong>Font Awesome</strong>。图片上传使用 <strong>Worldzb</strong> 插件库 <a href="https://github.com/worldzb/comp-lib" title=""><strong>comp-lib(1.0.0)</strong></a></p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
					</div>
				</div><!-- /.modal-content -->
			</div><!-- /.modal -->
		</div>
	</div>
</template>

<script>
	import config from '../config/config.js'
	export default{
		name:'about',
		data(){
			return {
				TextShow:config.MenuTextShow,
				version:config.version
			}
		},
		methods:{
			about:function(){
				$('#aboutModal').modal('show');
			}
		}
	}
</script>