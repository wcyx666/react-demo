import {
	connect
} from 'react-redux';

import {
	bindActionCreators
} from 'redux';

import * as searchInfo from '../../actions/search';

//=====引入组件=====
import search from '../../components/seachr/seachr.js'

//=====react-redux 封装组件=====

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？

const mapStateToProps = (state) => {
	return {
		data: state
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		searchInfos: bindActionCreators(searchInfo, dispatch),
	}
};


//封装传递state和dispatch
var neactRedux = connect(mapStateToProps, mapDispatchToProps)(search);

export default neactRedux