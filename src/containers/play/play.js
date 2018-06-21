import {
	connect
} from 'react-redux';

import {
	bindActionCreators
} from 'redux';

import * as playAction from '../../actions/music';

//=====引入组件=====
import Play from '../../components/play/play.js'


//=====react-redux 封装组件=====

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？

const mapStateToProps = (state) => {
	return {
		info: state
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		playInfo: bindActionCreators(playAction, dispatch)
	}
};


//封装传递state和dispatch
var MyeactRedux = connect(mapStateToProps, mapDispatchToProps)(Play);

export default MyeactRedux