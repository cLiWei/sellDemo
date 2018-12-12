export const allRequest = {
    created() {
       
    },
	data(){
		return {
			url:"http://47.101.145.156/wx_zt/php/"
		}
	},	
    methods: {
      /** request 请求
       * @param  {string} url    
			 * @param  {string} type  （大写） GET/POST 默认GET
       * @param  {obj} data
      */
			request(obj){
				return new Promise((resolve,reject) =>{
					uni.request({
						url:obj.url,
						data:obj.data,
						method:obj.type||"GET",
						success(res){
							resolve(res);
						},
						fail(res) {
							reject(res)
						}
					})
				})
			},
		/**getUpImgUrls 从本地相册选择图片或使用相机拍照
		 * @param  {Number} count 上传张数   默认上传九张
		 * @param  {Array<String>} sizeType  original 原图，compressed 压缩图，默认二者都有
		 * @param  {Array<String>} sourceType album 从相册选图，camera 使用相机，默认二者都有
		 */
		getUpImgUrls(obj=""){
			try{
				return new Promise((resolve,reject) =>{
					uni.chooseImage({
						count:obj.count || 9,
						sizeType:obj.sizeType || ["original","compressed"],
						sourceType:obj.sourceType || ["album","camera"],
						success(res){
							resolve(res);
						},
						fail(res) {
							reject(res)
						}
					})
				})
			}catch(e){}
		},
		/**
		 * upImg 上传图片
		 * @param  {String} imgurl 需要上传的图片路径
		 */
		upImg(imgurl){
			let url = this.url;
			try{
				return new Promise((resolve,reject) =>{
					uni.uploadFile({
						url:url+"upload/upload.php",
						filePath:imgurl,
						name: 'file',
						formData: {
						'user': 'test'
						},
						
						success(res){
							resolve(res);
						},
						fail(res){
							reject(res)
						}
					})
				})
			}catch(e){}
			
		}
    }
};
