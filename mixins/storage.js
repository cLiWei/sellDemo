export const storage = {
    created() {
       
    },
		
    methods: {
	/**setStorage 将 data 存储在本地缓存中指定的 key 中
	 * @param  {String} key 本地缓存中的指定的 key
	 * @param  {Object/String} data 需要存储的内容
	 * 同步接口。
	 */
		setStorage(key,data){
			try {
					uni.setStorageSync(key, data);
			} catch (e) {
					
			}
		},
	/**getStorage 从本地缓存中同步获取指定 key 对应的内容
	* @param  {String} key 本地缓存中的指定的 key
	*/
	//同步接口。
		getStorage(key){
			try {
				let storage =	uni.getStorageSync(key);
				return	storage;
			} catch (e) {
					
			}
		},
	/**getAllStorage 同步获取当前 storage 的相关信息。
	* 同步接口
	*/
		getAllStorage(){
			try {
				let storage =	uni.getStorageInfoSync();
				return	storage;
			} catch (e) {
					
			}
		},
	/**removeStorage 从本地缓存中同步移除指定 key。
	* @param  {String} key 本地缓存中的指定的 key
	* 同步接口。
	*/
		removeStorage(key){
			try {
				uni.removeStorageSync(key);
			} catch (e) {
					
			}
		},
	/**removeStorage 从本地缓存中同步移除指定 key。
	* @param  {String} key 本地缓存中的指定的 key
	* 同步接口。
	*/
		clearStorage(){
			try {
					uni.clearStorageSync();
			} catch (e) {
					// error
			}
		}
    }
};
