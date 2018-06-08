import {
	connect
} from 'react-redux';

import {
	bindActionCreators
} from 'redux';

import * as myInfoAction from '../../actions/my';

//=====引入组件=====
import My from '../../components/my/my.js'


//=====react-redux 封装组件=====

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？

const mapStateToProps = (state) => {
	console.log(state)
	return {
		info: state
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		myInfoAction: bindActionCreators(myInfoAction, dispatch)
	}
};


//封装传递state和dispatch
var MyeactRedux = connect(mapStateToProps, mapDispatchToProps)(My);

export default MyeactRedux