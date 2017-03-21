

/*
* test app
*/

import Vue from "vue" ;
import app from "../../src/app.vue" ;

describe('test app.vue' , () => {

	// 检查原始组件选项
	it('has a created hook', () => {
		expect(typeof app.created).toBe('function')
	})
	// 评估原始组件选项中的函数的结果
	/*it('sets the correct default data', () => {
		expect(typeof App.data).toBe('function') ;
		const defaultData = App.data() ;
		expect(defaultData.title).toBe('Vue Demo') ;
	})*/

	// 测试方法

});