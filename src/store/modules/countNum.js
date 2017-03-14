
/*
* Vuex Module 
*/

import Vue from "vue" ;
import Vuex from "vuex" ;
import * as types from "../mutation-type.js" ;

const state = {
	count : 0
} ;

console.log(types);

const mutations = {
	[types.ADD_COUNT](state){
		state.count++ ;
	} ,
	[types.DELETE_COUNT](state){
		state.count-- ;
	} ,
	[types.SHOW_COUNT](state){
		alert(state.count) ;
	}
} ;

const getters = {
	allCount : state => state.count
} ;

const actions = {
	getCountNum ({ commit }){
		commit(types.SHOW_COUNT);
	} 
} ;

export default {
	state ,
	mutations ,
	getters ,
	actions
}