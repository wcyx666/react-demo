import React, {
	Component
} from 'react';
import {
	Route,
	HashRouter
} from 'react-router-dom';

import Seachr from './seachr/seachr' // 搜索
import Song from './song/song' //热歌榜
import Recommend from './recommend/recommend' //推荐榜
import RecomList from './recommend/list/list' //推荐榜
import Play from './common/play/play' // 音乐播放
class Routes extends Component {

	render() {
		return (
			<HashRouter>
				<div>
					<Route exact path='/' component={ Recommend }/>
					<Route path='/song' component={ Song }/>
					<Route path='/seachr' component={ Seachr }/>
					<Route path='/detail/:id' component={ Play }/>
					<Route path='/recom/list/:id' component={ RecomList }/>
				</div>
               
            </HashRouter>
		);
	}
}

export default Routes;