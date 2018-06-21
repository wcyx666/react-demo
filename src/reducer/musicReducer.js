// 工具函数，用于组织多个reducer，并返回reducer集合
import * as actionType from '../constants/action';

const UrlRedux = (state = {}, action) => {
	switch (action.type) {
		case actionType.MUSIC_URL:
			//倒叙显示
			return action.data;
		default:
			return state;
	}
}

const DetailRedux = (state = {}, action) => {
	switch (action.type) {
		case actionType.MUSIC_DETAIL:
			//倒叙显示
			return action.data;
		default:
			return state;
	}
}

export {
	UrlRedux,
	DetailRedux
}