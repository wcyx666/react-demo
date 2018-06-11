// 工具函数，用于组织多个reducer，并返回reducer集合
import * as actionType from '../constants/action';

const searchRedux = (state = [], action) => {
	switch (action.type) {
		case actionType.SEARCH_REVERSE:
			return action.data;
			break;
		default:
			return state;
	}
}

const HotsearchRedux = (state = [], action) => {
	switch (action.type) {
		case actionType.HOTSEARCH_REVERSE:
			return action.data;
			break;
		default:
			return state;
	}
}
export {
	searchRedux,
	HotsearchRedux
}