
/*
* show count num
*/

<template>
	<div class="countShow">
		当前的计数为: {{count}}
	</div>
</template>

<!-- 方式一 Vuex getters 直接引用 
<script>
	export default {
		data(){
			return{
				count : this.$store.getters.allCount
			}
		} ,
		mounted() {
			// 方式一、 Vuex getters 直接引用
			console.log(this.$store.getters.allCount);
		}
	}
</script>
-->

<!-- 方式二 Vuex getters mapGetters -->
<script>
	import { mapGetters } from "vuex" ;
	export default {
		computed: {
		    ...mapGetters({
		      count: 'allCount'
		    })
  		}
	}
</script>

<style scope>
.countShow{
	margin-top: 15px;
	font-size : 15px;
	font-weight : 700 ;
}
</style>