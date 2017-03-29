<template>
  <div>
      <transition name="path-fade" mode="out-in">
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>

  import SetDpr from "./util/dpr" ;

  export default {
    name : 'app',
    data(){
      return {
        'title' : 'Vue Demo'
      }
    } ,
    components: {
    } ,
    methods : {
      init(){
        console.log("project init") ;
      } ,
      add(num1 , num2){
        return num1 + num2 ;
      }
    } ,
    mounted (){
      console.log("init");
      new SetDpr() ;
    }
  }
</script>

<style>
body{
  background-color: #fbfbfb ;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
.path-fade-enter-active, .path-fade-leave-active {
      transition: opacity .3s;
  }
.path-fade-enter, .path-fade-leave {
    opacity: 0;
}
</style>