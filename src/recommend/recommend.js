import React, {
	Component
} from 'react';
import axios from 'axios';
import Head from '../common/header/header';

// 引入CSS
import './recommend.css'

class Recommend extends Component {
	constructor(props) {
		super(props);
		this.state = {
			songsData: [], // 推荐歌曲
			newsgDta: [] // 最新歌曲
		};
	}
	render() {
		const songs = this.state.songsData.map((data, index) => {
			return <li className='sgitem' key={index}>
						<div className="picUrl">
							<img src={data.picUrl}/>
						</div>
						<p>{ data.name }</p>
					</li>
		})
		const newsg = this.state.newsgDta.map((data, index) => {
			return <li className='newsgitem' key={index}>
						<p className='f-thide sgtl'>{ data.name }<span>{ data.song.alias[0] }</span></p>
			<p className='f-thide sginfo'>{ data.song.album.artists[0].name } - { data.song.album.name }</p>
					</li>
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
				<div className="recommend_content_newsg">
					<h2 className="recommend_title">最新音乐</h2>
					<ul>
						{ newsg }
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

		axios.get('http://localhost:3001/personalized/newsong')
			.then(function(res) {
				console.log(res.data.result)
				that.setState({
					newsgDta: res.data.result
				})
			})
			.catch(function(error) {
				console.log(error)
			});

	}
}

export default Recommend;