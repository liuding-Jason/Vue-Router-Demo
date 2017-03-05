
import Vue from "vue" ;
import VueResource from "vue-resource" ;
import Router from "./routes" ;

Vue.use(VueResource);
``
// 路由写法 一
const app = new Vue({
	el : "#app" ,
	data : {
		currentRoute : window.location.pathname
	} ,
	computed : {
		ViewComponent (){
			const tempView = Router[this.currentRoute] ;
			console.log(tempView);
			return tempView === 'Home' || tempView == 'List'? 
					require(`./pages/${tempView}.vue`) :
					require("./pages/404.vue") ;
		}
	} ,
	render (h){
		return h(this.ViewComponent)
	}
});

// 路由写法 二
/*
import VueRouter from "vue-router" ;
Vue.use(VueRouter);

import Home from "./pages/home.vue" ;
import List from "./pages/list.vue" ;

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/list',
      component: List
    }
  ]
}) ;

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
*/

