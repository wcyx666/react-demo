import {
	connect
} from 'react-redux';

import {
	bindActionCreators
} from 'redux';

import * as RecomListInfo from '../../actions/recommend';

//=====引入组件=====
import RecomList from '../../components/recommend/list/list.js'

//=====react-redux 封装组件=====

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？

const mapStateToProps = (state) => {
	return {
		data: state
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		RecomListInfos: bindActionCreators(RecomListInfo, dispatch),
	}
};


//封装传递state和dispatch
var neactRedux = connect(mapStateToProps, mapDispatchToProps)(RecomList);

export default neactRedux