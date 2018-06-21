import * as actionTypes from '../constants/action';

// 获取歌单URL
const Url = (data) => {
	return {
		type: actionTypes.MUSIC_URL,
		data
	}
};

// 获取歌单详情
const Detail = (data) => {
	return {
		type: actionTypes.MUSIC_DETAIL,
		data
	}
};

export {
	Url,
	Detail
}