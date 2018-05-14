import React, {
	Component
} from 'react';
import axios from 'axios';
import Head from '../common/header/header';

class Recommend extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: ''
		};
	}
	render() {
		return (
			<div className="recommend">
				<Head title = '网易云音乐'/>
				<div>
					推荐歌曲
				</div>
      		</div>
		);
	}
}

export default Recommend;