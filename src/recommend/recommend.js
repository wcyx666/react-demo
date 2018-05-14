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
	componentDidMount() {
        let that = this;
        axios.get('http://musicapi.leanapp.cn/personalized')
        .then(function(res) {
            console.log(res)
            
        })
        .catch(function(error) {
            console.log(error)
        });

        axios.get('http://musicapi.leanapp.cn/personalized/newsong')
        .then(function(res) {
            console.log(res)
            
        })
        .catch(function(error) {
            console.log(error)
        });

    }
}

export default Recommend;