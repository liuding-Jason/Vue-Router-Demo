

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
});