<template>
	<view class="content">
        <image class="logo" src="../../static/logo.png"></image>
		<view>
			<input type="text" v-model="title" />
            <text class="title">{{title}}</text>
			<button @tap="show11">提交</button>
			<text>{{test}}</text>
        </view>
	</view>
</template>

<script>
	import {common} from '../../mixins/common.js';
	import {allRequest} from '../../mixins/allRequest.js';
	import {dialog} from '../../mixins/dialog.js';
	import {storage} from '../../mixins/storage.js';
	export default {
		mixins:[common,storage,allRequest,dialog],
		
		data() {
			return {
				title: 'Hello',
				test:""
			}
		},
		onLoad() {
			
		},
		methods: {
			async show11(){
				let url = this.url;
				// 从本地相册选择图片或使用相机拍照。
				let imgurls = await this.getUpImgUrls();
				//获取上传的图片张数
				let count = imgurls.tempFilePaths.length;
				let resultData=[];
				for(let i =0;i<count;i++){
					let imgurl = imgurls.tempFilePaths[i];
					//上传图片
					let data =await this.upImg(imgurl);
					resultData.push(url+data.data);
				}
				//返回的上传后的地址
				console.log(resultData);
			}
			
			
			
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
