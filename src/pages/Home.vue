<template>
	<div>
		<h1>{{title}}</h1>
		<button class="btn" @click="showTotalCount">actions直接使用</button>
		<button class="btn" @click="getCountNum">mapActions使用</button>
		<br/>
		<br/>
		<button class="btn" @click="addCount">mutation直接使用</button>
		<button class="btn" @click="ADD_COUNT">mapMutations直接使用</button>
		<show-count></show-count>
	</div>
</template>

<script>
	import showCount from "../components/showCount.vue" ;
	import Conf from "../config" ;
	import VueResource from "vue-resource" ;
	// 方式一 Vuex action mapActions
	import {mapActions} from "vuex" ;
	// 方式二 Vuex mutation mapMutations 
	import {mapMutations} from "vuex" ;

	export default {
		data () {
			return {
				title : "Hello Vue And Node Demo!" 
			}
		} ,
		components : {
			showCount
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
			} ,
			showTotalCount (){
				// 方式一 Vuex action 直接引用
				this.$store.dispatch('getCountNum');
			} ,
			...mapActions([
				'getCountNum'
			]) ,
			addCount(){
				// 方式一 Vuex mutation 直接使用
				this.$store.commit("ADD_COUNT");
			},
			...mapMutations([
				'ADD_COUNT' ,
				'DELETE_COUNT' ,
				'SHOW_COUNT'
			])

		} ,
		watch : {
			title : function(val){
				console.log(`title has changed , and new value is ${val}`);
			}
		} ,
		mounted (){
			this.$http.post(Conf.BASEURL , {})
			.then(({status = 200 , statusText = "ok" , data = {}}) => {
				if(status * 1 === 200 && statusText.toUpperCase() === "OK"){
					return data
				}
			})
			.then(({code = void 0 , data = {} , message = "请求失败！"}) => {
				if(!this.judgeData(code , message)) return ;
				let {
					name = ""
				} = data ;
				this.title = name ;
			});
		} 
	}
</script>

<style scope>

.btn {
	border : 1px solid #ccc ;
	background-color : #87CA3D ;
	color : #fff ;
	text-align : center ;
	padding : 5px 10px ;
	font-weight : 700 ;
	letter-spacing : 3px;
	border-radius : 5px;
}

.btn:active{
	color : #333 ;
	border : none ;
}

</style>