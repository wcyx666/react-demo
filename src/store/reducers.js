// 工具函数，用于组织多个reducer，并返回reducer集合
import {
	combineReducers
} from 'redux'
import action from './action'
// 默认值
const initialState = 10

// 一个reducer就是一个函数
function pageTitle(state = initialState, action) {  
	switch (action.type) {
		case 'CHANGE_TEXT':
			return {
				text: action.data
			}
		case 'BUTTON_CLICK':
			return {
				text: 'Hello world'
			}
		default:
			return initialState;
	}
} 

// 导出所有reducer
export default combineReducers({ 
	pageTitle
})