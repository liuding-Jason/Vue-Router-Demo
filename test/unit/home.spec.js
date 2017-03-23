
/*
* test vue-component's data method , it must be a function , and you could test all of the attributes of this component
*/

import Vue from "vue" ;
import Home from "../../src/pages/Home.vue" ;

describe("test data method" , () => {

	// 评估原始组件选项中的函数的结果
	it('sets the correct default data', () => {
		expect(typeof Home.data).toBe('function') ;
		const defaultData = Home.data() ;
		expect(defaultData.title).toBe("Hello Vue And Node Demo!") ;
	})
});