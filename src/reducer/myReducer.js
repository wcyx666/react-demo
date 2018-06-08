// 工具函数，用于组织多个reducer，并返回reducer集合
import * as actionType from '../constants/action';

const newsinit = {
	myInfo: ''
};
const myRedux = (state = newsinit.myInfo, action) => {
	switch (action.type) {
		case actionType.SORT_REVERSE:
			//倒叙显示
			return action.data;
		default:
			return state;
	}
}


export {
	myRedux
}