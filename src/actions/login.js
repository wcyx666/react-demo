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

export {
	Login
}