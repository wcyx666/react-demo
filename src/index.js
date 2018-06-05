import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './route.js';
import reducer from './reducer/store'
import {
	createStore
} from 'redux';
import {
	Provider,
	connect
} from 'react-redux';

//store  
let store = createStore(reducer);

ReactDOM.render((
	<Provider store={store}>
		<App/>
	</Provider>
), document.getElementById('root'));
registerServiceWorker();