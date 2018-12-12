export const dialog = {
    created() {
       
    },
		
		
    methods: {
        // 加载等待动画出现
				//content:提示，不填默认为空
        showLoad(content=""){
          uni.showLoading({
           	title:content,
           	mask:true
          })
        },
         // 加载等待动画消失
        hideLoad(){
          uni.hideLoading();
        },
        // 成功提示
				//content:提示，不填默认为空
				showSuccess(content=""){
          uni.showToast({
           	title:content,
           	icon:"success", //"success", "loading", "none"
           	mask:true
          })
        },
  
		/**
		* 选择框从底部弹起
		* @param  {[Array<String>]} list      		[按钮的文字数组，数组长度最大为6个]
		* @param  {[HexColor]} color      		[按钮的文字颜色，默认为"#000000"]
		* @param  {[Function]} success      		[接口调用成功的回调函数]
		* success(res)  res:{tapIndex:index,errMsg:tips}    index:索引   tips:提示
		*/
		selectUp(obj){
			let data = {
				itemList:obj.list,
				itemColor:obj.color||"#000000",
				success:obj.success,
				fail:obj.fail
			}
			uni.showActionSheet({
					itemList: data.itemList,
					itemColor:data.itemColor,
					success(res) {
						if(typeof data.success === "function"){
							data.success(res)
						}	
					},
					fail(res) {
						if(typeof data.fail === "function"){
							data.fail(res)
						}		
					}
			});
		},
        /**
          * [提示框]
					* @param  {[string]} title      		[标题]
          * @param  {[string]} content    		[提示内容]
					* @param  {[Boolean]} showCancel    [是否显示取消按钮，默认为 true]
					* @param  {[string]} cancelText    	[取消按钮的文字，默认为"取消"，最多 4 个字符]
					* @param  {[HexColor]} cancelColor  [取消按钮的文字颜色，默认为"#000000"]
					* @param  {[string]} confirmText    [确定按钮的文字，默认为"确定"，最多 4 个字符]
					* @param  {[HexColor]} confirmColor [确定按钮的文字颜色，默认为"#3CC51F"]
          * @param  {[function]} confirm 			[点击确定]
          * @param  {[function]} cancel  			[点击取消]
          *
          */
        openDialog(obj){
			let data = {
				title:obj.title||'提示',
				content:obj.content||'',
				showCancel:obj.showCancel||true,
				cancelText:obj.cancelText||"取消",
				cancelColor:obj.cancelColor||"#000000",
				confirmText:obj.confirmText||"确认",
				confirmColor:obj.confirmColor||"#3CC51F",
				confirm:obj.confirm ,
				cancel:obj.cancel
			}
			uni.showModal({
				title: data.title,
				content: data.content,
				showCancel:data.showCancel,
				cancelText:data.cancelText,
				cancelColor:data.cancelColor,
				confirmText:data.confirmText,
				confirmColor:data.confirmColor,
				success(res) {
					if(res.confirm) {
						if(typeof data.confirm === "function"){
							data.confirm(res)
						}
					}else if (res.cancel) {
						if(typeof data.cancel === "function"){
							data.cancel(res)
						}
					}
				}
			 });
         }
	}
};
