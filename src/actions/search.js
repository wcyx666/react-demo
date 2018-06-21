import * as actionTypes from '../constants/action';
import API from '../utils/api';
import request from '../utils/http';

// 获取歌单
const Search = (data) => {
	return {
		type: actionTypes.SEARCH_REVERSE,
		data
	}
};
const SearchHot = (data) => {
	return {
		type: actionTypes.HOTSEARCH_REVERSE,
		data
	}
};
// 请求数据
const fetchSearch = (val, num) => {

	return async dispatch => {
		try {
			let res = await request.asyncGet(`http://localhost:3001${API.search}?keywords=${val}&limit=${num}`);
			let resultData = await res.json();
			dispatch(Search(resultData.result.songs));
		} catch (err) {
			console.log("Error", err);
		}
	}
};

// 请求数据
const fetchSearchHot = () => {

	return async dispatch => {
		try {
			let res = await request.asyncGet(`http://localhost:3001${API.searchHot}`);
			let resultData = await res.json();
			dispatch(SearchHot(resultData.result.hots));
		} catch (err) {
			console.log("Error", err);
		}
	}
};

export {
	fetchSearch,
	fetchSearchHot
}