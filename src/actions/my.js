import * as actionTypes from '../constants/action';
import API from '../utils/api';
import request from '../utils/http';

// 获取歌单
const updateMusic = (data) => {
	return {
		type: actionTypes.SORT_REVERSE,
		data
	}
};

// 请求数据
const fetchMusic = (id) => {

	return async dispatch => {
		try {
			let res_song = await request.asyncGet(`http://localhost:3001/top/playlist/highquality/?limit=6`);
			let resultData = await res_song.json();
			console.log(resultData)
			dispatch(updateMusic(resultData.playlists));
		} catch (err) {
			console.log("Error", err);
		}
	}
};

export {
	fetchMusic
}