export const common = {
    created() {
       
    },
		
		
    methods: {
       // 获取当前日期
         //return: 2018-01-01 
        getNowDate(){
           let now = new Date();
               return now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
        },
         //在给定年份上增加一年
        addYear(time,count){
             var date=new Date(time);
             var interval=parseInt(count);
             var year=date.getFullYear()+interval;
             var month=date.getMonth()+1<10?'0'+(date.getMonth()+1):(date.getMonth()+1);
             var day = date.getDate()<10?'0'+date.getDate():date.getDate();
             return year+"-"+month+"-"+day;
        },
         //获取到年月日，数组形式
         //return [年，月，日]
        getYMD(){
             let arr=[];
             let date = new Date();
             arr[0] = date.getFullYear();
             arr[1] = date.getMonth() + 1;
             arr[2] = date.getDate()
             return arr;
        },
         // json对象转字符串
        obj_string(obj){
           let string = JSON.stringify(obj);
           return string;
        },
         // json字符串转对象
        string_obj(string){
           let obj = JSON.parse(string);
           return obj;
        },
        
         /**
          * [verifyTel 手机号码验证]
          * @param  {[number]} tel [手机号码]
          * @return {[boolean]}    
          */
        verifyTel(tel){
           let userTel = /^[1][3,4,5,7,8][0-9]{9}$/;
           let isTelNum=userTel.test(tel);
           let isTel = false;
           if(isTelNum){
             isTel = true;
           }
           return isTel;
        },
       /**
        * [compare 数组内对象排序]
        * @param  {[string]} prop [需要排序的属性]
        * @param  {[number]} num  [正数则为大的在前面，负数就是小的在前面]
        * @return {[arr]}      [排序后的数组]
        * 数据排序后调用排序：arr.sort( compare('primary',1));
        */
       compare(prop,num) {
         return function (obj1, obj2) {
             var val1 = obj1[prop];
             var val2 = obj2[prop];
             if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                 val1 = Number(val1);
                 val2 = Number(val2);
             }
             if (val1 < val2) {
                 return num;
             } else if (val1 > val2) {
                 return -num;
             } else {
                 return 0;
             }            
         } 
       },
			 // 去掉左右空格
			Trim(text) {
				return text.replace(/(^\s*)|(\s*$)/g, "");
			},
    }
};
