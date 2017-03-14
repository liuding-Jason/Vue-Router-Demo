
import Vue from "vue" ;
import VueResource from "vue-resource" ;
import Router from "./routes" ;
Vue.use(VueRouter);

import App  from "./app.vue" ; 

const app = new Vue({
  router: Router,
  render: h => h(App)
}).$mount('#app') ;
