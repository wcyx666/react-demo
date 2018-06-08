import * as actionTypes from '../constants/action';
import API from '../utils/api';
import request from '../utils/http';

// 获取歌单
const Login = (data) => {
	return {
		type: actionTypes.Login_REVERSE,
		data
	}
};

// 请求数据
const fetchLogin = (phone, password) => {

	return async dispatch => {
		try {
			let res = await request.asyncGet(`http://localhost:3001${API.login}?phone=${phone}&password=${password}`);
			let resultData = await res.json();
			dispatch(Login(resultData));
		} catch (err) {
			console.log("Error", err);
		}
	}
};

export {
	fetchLogin
}