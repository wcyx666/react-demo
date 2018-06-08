import {
	connect
} from 'react-redux';

//=====引入组件=====
import song from '../../components/song/song.js'


//=====react-redux 封装组件=====

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
	return {
		song: state.songReducer
	};
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
	return {
		SORTREVERSE: function() {
			dispatch({
				type: "SORT_REVERSE"
			})
		}
	};
}

//封装传递state和dispatch
var NewsReactRedux = connect(mapStateToProps, mapDispatchToProps)(song);

export default NewsReactRedux