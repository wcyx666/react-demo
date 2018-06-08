import {
	connect
} from 'react-redux';

import {
	bindActionCreators
} from 'redux';

import * as loginInfo from '../../actions/login';

//=====引入组件=====
import Login from '../../components/login/login.js'


//=====react-redux 封装组件=====

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？

const mapStateToProps = (state) => {
	return {
		info: state
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		loginInfos: bindActionCreators(loginInfo, dispatch)
	}
};


//封装传递state和dispatch
var LogineactRedux = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LogineactRedux