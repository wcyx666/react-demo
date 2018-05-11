import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Main from './page/main'
import Page from './page/page'
class Routes extends Component {

	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path='/' component={ Main }/>
					<Route path='/page' component={ Page }/>
				</div>
               
            </BrowserRouter>
		);
	}
}

export default Routes;

