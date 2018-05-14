import React, {
	Component
} from 'react';
import {
	Route,
	BrowserRouter
} from 'react-router-dom';

import Seachr from './seachr/seachr' // 搜索
import Page from './page/page'
import Song from './song/song' //热歌榜
import Recommend from './recommend/recommend' //推荐榜
class Routes extends Component {

	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path='/' component={ Recommend }/>
					<Route path='/song' component={ Song }/>
					<Route path='/seachr' component={ Seachr }/>
					<Route path='/detail/:id' component={ Page }/>
				</div>
               
            </BrowserRouter>
		);
	}
}

export default Routes;