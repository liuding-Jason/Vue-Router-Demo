<template>
	<h1>{{title}}</h1>
</template>

<script>
	import Conf from "../config" ;
	import VueResource from "vue-resource" ;

	export default {
		data () {
			return {
				title : "Hello Vue And Node Demo!" 
			}
		} ,
		methods : {
			hello (){
				console.log("hello");
			} ,
			judgeData(code , message){
				if(code * 1 !== 0){
					alert(message);
					return false ;
				}
				return true ;
			}
		} ,
		watch : {
			title : function(val){
				console.log(`title has changed , and new value is ${val}`);
			}
		} ,
		mounted (){
			// your data format : 
			// {
			//		code : 0 ,
			//		data : {
			//			title : ''
			//		} ,
			//		message : ok
			// }
			//

			this.$http.post(Conf.BASEURL)
			.then(({code = void 0 , data = {} , message = "请求失败！"}) => {
				if(!this.judgeData(code , message)) return ;
				let {
					title = ''
				} = data ;	
				title === '' ? title : this.title = title ;
			});
		} 
	}
</script>