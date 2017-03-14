
/*
* Vuex sets the shared states of different components , and mutations offer 
* the sync way to change the shared states .
*/

import Vue from "vue" ;
import Vuex from "vuex" ;
import countNum from "./modules/countNum" ;
import * as actions from "./actions" ;

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	actions ,
	modules : {
		countNum 
	} ,
	strict : debug
});