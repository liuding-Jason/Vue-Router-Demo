import VueRouter from "vue-router" ;
import Home from "./pages/home.vue" ;
import List from "./pages/list.vue" ;

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/home' , component: Home },
    { path: '/list' , component: List }
  ]
})
