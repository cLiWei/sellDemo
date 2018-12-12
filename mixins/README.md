<!-- js介绍 -->
a.allRequest.js : 所有的request请求，包括前后台传输，图片上传
b.storage.js : 所有的storage操作
c.dialog.js : 对所有弹窗，提示窗的封装
d.common.js : 对常用方法的封装
111

1.request的调用方法
	①async/await方法调用
	async show11(){
		var a= await this.request({
			url:"test.php",
		})
		console.log(a);
	}
	②promise方法调用
	show11(){
		this.request({
			url:"test.php",
		}).then((res)=>{
			console.log(res)
		},(res)=>{
			
		})
	}
	
2.上传图片

	async upImg(){
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