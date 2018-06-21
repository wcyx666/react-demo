import React, {
	Component
} from 'react';
import {
	Link,
} from 'react-router-dom';
import axios from 'axios';
import Head from '../../common/header/header';
import Loading from '../../common/loading/loading';
import request from '../../utils/http'
import API from '../../utils/api'
// 引入CSS
import './song.css'
class Song extends Component {

	constructor(props) {
		super(props);
		this.state = {
			newsgDta: [], // 最新歌曲
			loaded: false
		};
	}

	componentDidMount() {
		request.asyncGet(`http://localhost:3001${API.song}`).then(res => res.json()).then(resData => {
			console.log(this.props)
			this.props.songLists.Song(resData.result);
			this.setState({
				loaded: true
			})
		}).catch(err => {
			console.log('Error:' + err);
		})
	}

	render() {
		const newsg = this.props.data.songRedux.map((data, index) => {
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
				{this.state.loaded ?
					<ul className="song_box">
						{ newsg }
					</ul> :
					<Loading/>
				}
      		</div>
		);
	}


}

export default Song;