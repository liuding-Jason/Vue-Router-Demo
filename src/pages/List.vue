<template>
	<ul class="mod-stu">
		<li>
			<b class="mod-stu-name">名字</b>
			<span class="mod-stu-age">年龄</span>
			<i class="mod-stu-score"> 分数</i>
		</li>
		<li v-for="item in list" >
			<b class="mod-stu-name">{{item['name']}}</b>
			<span class="mod-stu-age">{{item['age']}}</span>
			<i class="mod-stu-score">{{item['score']}}</i>
		</li>
	</ul>
</template>

<script>
	
	import Conf from "../config.js" ;

	export default {
		data () {
			return {
				title : 'list' , 
				list : [
					{
						name : 'Jack' ,
						age	 : 15 ,
						score : 87
					} ,
					{
						name : 'Tom' ,
						age : 14 ,
						score : 90
					} ,
					{
						name : 'Rose' ,
						age : 16 ,
						score : 100
					}
				]
			}
		} ,

		components : {  } ,

		methods : {
			hello : function(){
				console.log("hello list!");
			} ,
			judgeData : function(code = void 0 , message = ""){
				if(code * 1 !== 0){
					alert(message);
					return false ;
				}
				return true ;
			}
		} ,

		watch : {
			list : function(val){
				console.log("list value is changed!");
			}
		} ,

		mounted (){

			//this.$http.post('' , {})
			//.then(({code = void 0 ,data = {} , message = "请求失败！"}) => {
			//	if(!this.judgeDate(code , message)) return ;
			//	let {
			//		list = []
			//	} = data ;
			//	this.list = list ;
			//});

			this.hello();
			this.title = 'newList' ;
		}

	}
</script>

<style scoped>
	.mod-stu {
		list-style:none;
	} 

	.mod-stu li {
		border-bottom:1px solid #aaa ;
		height : 45px ;
		line-height : 45px ;
	}

	.mod-stu-name {
		display: inline-block ;
		text-align : center ;
		width : 33% ;
	}
	.mod-stu-age {
		display: inline-block ;
		text-align : center ;
		width : 30% ;
	} 
	.mod-stu-score {
		display: inline-block ;
		text-align : center ;
		width : 33% ;
	}

</style>
