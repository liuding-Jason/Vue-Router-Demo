import VueRouter from "vue-router" ;
import Home from "./pages/home.vue" ;
import List from "./pages/list.vue" ;

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
  	{ path: '/' , redirect: '/home' } ,			// 默认路由
    { 
    	path: '/home' , 
    	component: Home , 
    	children : [{

    	} , {

    	}] }
    { path: '/list' , component: List }
  ]
})
