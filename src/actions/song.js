import * as actionTypes from '../constants/action';

// 获取歌单
const Song = (data) => {
	return {
		type: actionTypes.SONG_REVERSE,
		data
	}
};

export {
	Song
}