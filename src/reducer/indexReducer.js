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
	songRedux
} from './songReducer'

import {
	personalizedRedux,
	highqualityRedux,
	playListRedux,
	playInfoRedux
} from './recommendReducer'


import {
	searchRedux,
	HotsearchRedux
} from './seachrReducer'

import {
	UrlRedux,
	DetailRedux
} from './musicReducer'

export default combineReducers({
	myRedux,
	loginRedux,
	personalizedRedux,
	highqualityRedux,
	playListRedux,
	playInfoRedux,
	searchRedux,
	HotsearchRedux,
	songRedux,
	UrlRedux,
	DetailRedux
})