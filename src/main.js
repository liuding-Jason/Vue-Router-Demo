
import Vue from "vue" ;
import VueRouter from "vue-router" ;
import VueResource from "vue-resource" ;
import Router from "./routes" ;

import App  from "./app.vue" ; 

Vue.use(VueRouter);

const app = new Vue({
  router: new VueRouter(Router),
  render: h => h(App)
}).$mount('#app') ;
