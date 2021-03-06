import React, {
	Component
} from 'react';
import {
	Route,
	HashRouter
} from 'react-router-dom';


import AuthorizedRoute from './AuthorizedRoute'
import Seachr from './containers/search/search' // 搜索
import Song from './containers/song/songRedux' //热歌榜
import Recommend from './containers/recommend/recomRedux' //推荐榜
import RecomList from './containers/recommend/recom-list' //推荐榜
import Play from './containers/play/play' // 音乐播放
import My from './containers/my/myRedux' // 音乐播放
import Login from './containers/login/loginRedux' // 音乐播放
// 登录验证
const requireAuth = (nextState, replace) => {

	console.log(0)
}
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
					<AuthorizedRoute path='/my' component={ My }/>
					<Route path='/login' component={ Login }/>
				</div>
               
            </HashRouter>
		);
	}
}

export default Routes;