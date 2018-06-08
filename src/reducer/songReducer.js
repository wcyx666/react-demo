// 工具函数，用于组织多个reducer，并返回reducer集合
import {
	combineReducers
} from 'redux'
import * as actionTypes from '../constants/action';

var song = 1;

function songRedux(state = song, action) {
	switch (action.type) {
		case actionTypes.INCREMENT_COUNTER:
			//倒叙显示
			return state
		default:
			return state
	}
}


export default songRedux