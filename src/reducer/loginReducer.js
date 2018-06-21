import * as actionType from '../constants/action';

const loginRedux = (state = {}, action) => {
	switch (action.type) {
		case actionType.Login_REVERSE:
			//倒叙显示
			return action.data;
		default:
			return state;
	}
}


export {
	loginRedux
};