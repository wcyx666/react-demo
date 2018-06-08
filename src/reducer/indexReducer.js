// 用于合并所有的Reducer函数的文件index
import {
	combineReducers
} from 'redux';

import {
	loginRedux
} from './loginReducer'

import {
	myRedux
} from './myReducer'

import {
	personalizedRedux,
	highqualityRedux,
	playListRedux,
} from './recommendReducer'

export default combineReducers({
	myRedux,
	loginRedux,
	personalizedRedux,
	highqualityRedux,
	playListRedux
})