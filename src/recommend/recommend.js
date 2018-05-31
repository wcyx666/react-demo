import React, {
	Component
} from 'react';
import {
	Link,
} from 'react-router-dom';
import axios from 'axios';
import Head from '../common/header/header';

// 引入CSS
import './recommend.css'

class Recommend extends Component {
	constructor(props) {
		super(props);
		this.state = {
			songsData: [], // 推荐歌曲
			highquality: [], //精品歌单
		};
	}
	render() {
		const songs = this.state.songsData.map((data, index) => {
			return (
				<li className='sgitem' key={index}>
					<Link to={ '/recom/list/'+data.id }>
						<div className="picUrl">
							<img src={data.picUrl}/>
						</div>
						<p>{ data.name }</p>
					</Link>
				</li>
			)
		})
		const highquality = this.state.highquality.map((data, index) => {
			return (
				<li className='sgitem' key={index}>
					<Link to={ '/recom/list/'+data.id }>
						<div className="picUrl">
							<img src={data.coverImgUrl}/>
						</div>
						<p>{ data.name }</p>
					</Link>
				</li>
			)
		})
		return (
			<div className="recommend">
				<Head title = '网易云音乐'/>
				<div className="recommend_content_songs">
					<h2 className="recommend_title">推荐歌单</h2>
					<ul>
						{ songs }
					</ul>
				</div>
				<div className="recommend_content_songs">
					<h2 className="recommend_title">精品歌单</h2>
					<ul>
						{ highquality }
					</ul>
				</div>
      		</div>
		);
	}
	componentDidMount() {
		let that = this;
		axios.get('http://localhost:3001/personalized', {
				params: {
					limit: 6,
				}
			})
			.then(function(res) {
				console.log(res.data.result);
				that.setState({
					songsData: res.data.result
				})
			})
			.catch(function(error) {
				console.log(error)
			});
		axios.get('http://localhost:3001/top/playlist/highquality', {
				params: {
					limit: 6,
				}
			})
			.then(function(res) {
				console.log(res);
				that.setState({
					highquality: res.data.playlists
				})
			})
			.catch(function(error) {
				console.log(error)
			});
	}
}

export default Recommend;