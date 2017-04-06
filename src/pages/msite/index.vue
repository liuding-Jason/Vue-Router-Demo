<template>
	<div>
		<div class="msite-header">
			<div class="msite-header-position">
				<div class="position-left">
					
				</div>
				<div class="position-right">
					
				</div>
			</div>
			<div class="msite-header-search"></div>
			<div class="msite-header-rec"></div>
		</div>
		<div class="msite-banner">
			<div class="msite-banner-item"></div>
		</div>
		<div class="msite-list">
			<div class="msite-list-item"></div>
		</div>
	</div>
</template>

<script>
	import bannerItem from "./banner-item.vue" ;
	import listItem from "./list-item.vue" ;
	export default {
		data (){
			return {

			}
		} ,
		components : [bannerItem , listItem] ,
		mounted (){
			console.log("mount");
		}
	}

</script>

<style >
.msite-header{
	padding: 5px;
	background-color: #0096FF ;

}

.msite-header-position {
	position: relative;
	overflow: hidden;
}

.position-left , .position-right {
	position: absolute;
}

.position-left{
	left: 0 ;
}

.position-right {
	right : 0;
}

</style>