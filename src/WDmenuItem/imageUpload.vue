<template>
	<div class="btn-group" id="uploadBox">
		<a type="button" class="btn btn-default dropdown-toggle" 
		data-toggle="dropdown" @click="imageUpload()">
			 <i class="fa fa-file-image-o"></i>
			<small v-if="TextShow">图片</small>
		</a>
		<ul class="dropdown-menu active" role="menu">
			<li @click="showModal()"><a href="#">本地上传</a></li>
			<li @click="showModal2()"><a href="#">在线图片</a></li>
		</ul>
		<div class="modal fade" id="uploadImg" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						<h4 class="modal-title" id="myModalLabel">图片上传</h4>
					</div>
					<div class="modal-body" style="padding:0">
						<imgUpload width="597" height="400" @uploadend="uploadend" :URL="imgUploadURL"></imgUpload>
						<!-- <img src="http://pic2.sc.chinaz.com/files/pic/pic9/201711/zzpic8396.jpg" alt="" width="100%"> -->
					</div>
					
				</div><!-- /.modal-content -->
			</div><!-- /.modal -->
		</div>
		<div class="modal fade" id="urlImg" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
						<h4 class="modal-title" id="myModalLabel">图片上传</h4>
					</div>
					<div class="modal-body">
						
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
						<button type="button" class="btn btn-success">上传</button>
					</div>
				</div><!-- /.modal-content -->
			</div><!-- /.modal -->
		</div>
	</div>

</template>

<script>
	import config from '../config/config.js';
	import Vue from 'vue';
	import VueResource from 'vue-resource';
	import imgUpload from '../components/imgUpload/imgUpload.js';
	import imgBoxComp from '../components/imgBox/imgBox.vue';

	Vue.use(imgUpload);
	Vue.use(VueResource);
	export default{
		name:'imageUpload',
		data(){
			return {
				TextShow:config.MenuTextShow,
				isShow:false,
				imgUploadURL:config.imgUpload.url,
				sty:{

				}
			}
		},
		created:function(){
			this.uploadUrl=this.URL;
		},
		mounted(){
			this.zeroX=document.getElementById('uploadBox').offsetLeft;
			this.zeroY=document.getElementById('uploadBox').offsetTop;
		},
		updated(){

		},
		methods:{
			imageUpload:function(){
				this.isShow=!this.isShow;
				//console.log(this)
				//document.execCommand("contentReadOnly",false,true);
			},
			showModal:()=>{
				$('#uploadImg').modal('show');
			},
			showModal2:()=>{
				$('#urlImg').modal('show')
			},
			uploadend:(data)=>{
				let imgBox=Vue.extend(imgBoxComp);
				let dt=eval(data);
				let url=dt.body.replace(/\/%2F/g,'/').replace(/%2F/g,'/');//将返回的字符串正则替换成可用URL
				$('#uploadImg').modal('hide');
				document.execCommand("insertHTML",false,"<br>");
				document.execCommand("insertHTML",false,"<span id='imgBoxDiv'>dd</span>");
				new imgBox({
					propsData:{
						src:url,
					}
				}).$mount('#imgBoxDiv');
			}
		}
	}
</script>

<style type="text/css">
	#model{
		width: 200px;
		height: 200px;
		background-color: #eee;
		position: absolute;
		margin: 0;
		padding: 0;
		top:33px;
		left: 0
	}
	.header{
		width: 100%;height: 20px;background-color: #ccc;text-align: left
	}
</style>