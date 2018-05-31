import React, {
	Component
} from 'react';
import {
	Link,
} from 'react-router-dom';
import axios from 'axios';
import Head from '../common/header/header';
import http from '../utils/http'
import api from '../utils/api'
// 引入CSS
import './song.css'
class Song extends Component {

	constructor(props) {
		super(props);
		this.state = {
			newsgDta: [] // 最新歌曲
		};
	}
	render() {
		const newsg = this.state.newsgDta.map((data, index) => {
			return (
				<li className='newsgitem' key={index}>
					<Link to={ '/detail/'+data.id }>
						<p className='f-thide sgtl'>
							{ data.name }
							<span>{ data.song.alias[0] }</span>
						</p>
						<p className='f-thide sginfo'>
							{ data.song.album.artists[0].name } - { data.song.album.name }
						</p>
					</Link>
				</li>
			)
		})
		return (
			<div className="song">
				<Head title = '网易云音乐'/>
				<div className="song_box">
					<ul>
						{ newsg }
					</ul>
				</div>
      		</div>
		);
	}

	componentDidMount() {
		let that = this;
		axios.get('http://localhost:3001/personalized/newsong')
			.then(function(res) {
				console.log(res)
				that.setState({
					newsgDta: res.data.result
				});
			})
			.catch(function(error) {
				console.log(error)
			});
	}
}

export default Song;