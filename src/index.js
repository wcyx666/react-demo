import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './route.js';
import reducer from './store/reducers'
import {
	createStore
} from 'redux';
import {
	Provider,
	connect
} from 'react-redux';

//store  
let store = createStore(reducer);
//映射Redux state到组件的属性  
function mapStateToProps(state) {
	console.log(state)
	return {
		pageTitle: state.pageTitle
	}
}


//连接组件
const Apps = connect(mapStateToProps)(App)

ReactDOM.render((
	<Provider store={store}>
		<Apps/>
	</Provider>
), document.getElementById('root'));
registerServiceWorker();