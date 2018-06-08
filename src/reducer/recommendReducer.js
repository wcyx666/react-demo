// 工具函数，用于组织多个reducer，并返回reducer集合
import * as actionType from '../constants/action';

const personalizedRedux = (state = [], action) => {
	switch (action.type) {
		case actionType.RECOM_REVERSE:
			return action.data;
			break;
		default:
			return state;
	}
}
const highqualityRedux = (state = [], action) => {
	switch (action.type) {
		case actionType.FINE_REVERSE:
			return action.data;
			break;
		default:
			return state;
	}
}
const playListRedux = (state = {}, action) => {
	switch (action.type) {
		case actionType.PLAYLIST_REVERSE:
			return action.data;
			break;
		default:
			return state;
	}
}
export {
	personalizedRedux,
	highqualityRedux,
	playListRedux
}