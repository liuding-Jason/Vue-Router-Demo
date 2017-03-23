
/*
* test vue-component's declaration cycle , like mounted 
*/

import Vue from "vue" ;
import List from "../../src/pages/List.vue" ;

describe('test component declaration cycle' , () => {

	// 检查原始组件选项
	/*it('has a created hook', () => {
		expect(typeof List.computed).toBe('function')
	})*/

	// 评估原始组件选项中的函数的结果
	it('sets the correct default data', () => {
		expect(typeof List.data).toBe('function') ;
		const defaultData = List.data() ;
		expect(defaultData.title).toBe("list") ;
	})

	// 检查mount中的组件实例
	it('correctly sets the message when created', () => {
		const vm = new Vue(List).$mount()
		expect(vm.title).toBe('newList')
	}) ;

});