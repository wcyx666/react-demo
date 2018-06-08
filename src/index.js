import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './route.js';
import configureStore from './store/store'
import {
	createStore
} from 'redux';
import {
	Provider,
	connect
} from 'react-redux';

//store  
const store = configureStore();

ReactDOM.render((
	<Provider store={store}>
		<App/>
	</Provider>
), document.getElementById('root'));
registerServiceWorker();