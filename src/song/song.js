import React, {
	Component
} from 'react';
import axios from 'axios';
import Head from '../common/header/header';

class Song extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	render() {
		return (
			<div className="song">
				<Head title = '网易云音乐'/>
				<div>
					热歌榜
				</div>
      		</div>
		);
	}
	componentDidMount() {
		let that = this;
		axios.get('http://localhost:3001/playlist/hot', {
				params: {
				idx: '1',
				}
			})
			.then(function(res) {
				console.log(res);

			})
			.catch(function(error) {
				console.log(error)
			});
	}
}

export default Song;