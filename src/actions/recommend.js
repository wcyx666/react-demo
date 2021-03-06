import * as actionTypes from '../constants/action';
import API from '../utils/api';
import request from '../utils/http';

// 获取歌单
const Personalized = (data) => {
	return {
		type: actionTypes.RECOM_REVERSE,
		data
	}
};
const Highquality = (data) => {
	return {
		type: actionTypes.FINE_REVERSE,
		data
	}
};
const PlayList = (data) => {
	return {
		type: actionTypes.PLAYLIST_REVERSE,
		data
	}
};

const PlayInfo = (data) => {
	return {
		type: actionTypes.PLAYInfo_REVERSE,
		data
	}
};
// 推荐歌单
const fetchPersonalized = (num) => {

	return async dispatch => {
		try {
			let personalized = await request.asyncGet(`http://localhost:3001${API.personalized}?limit=${num}`);
			let personalizedData = await personalized.json();
			dispatch(Personalized(personalizedData.result));
		} catch (err) {
			console.log("Error", err);
		}
	}
};
// 精品歌单
const fetchHighquality = (num) => {

	return async dispatch => {
		try {
			let highquality = await request.asyncGet(`http://localhost:3001${API.highquality}?limit=${num}`);
			let highqualityData = await highquality.json();
			dispatch(Highquality(highqualityData.playlists));
		} catch (err) {
			console.log("Error", err);
		}
	}
};

export {
	fetchPersonalized,
	fetchHighquality,
	PlayList,
	PlayInfo
}