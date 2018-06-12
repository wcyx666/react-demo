// 工具函数，用于组织多个reducer，并返回reducer集合
import * as actionType from '../constants/action';

const songRedux = (state = [], action) => {
	switch (action.type) {
		case actionType.SONG_REVERSE:
			return action.data;
			break;
		default:
			return state;
	}
}

export {
	songRedux,
}