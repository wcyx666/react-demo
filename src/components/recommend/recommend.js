import React, {
	Component
} from 'react';
import {
	Link,
} from 'react-router-dom';
import axios from 'axios';
import Head from '../../common/header/header';
import Loading from '../../common/loading/loading';

// 引入CSS
import './recommend.css'

class Recommend extends Component {
	constructor(props) {
		super(props);
		this.state = {
			songsData: [], // 推荐歌曲
			highquality: [], //精品歌单
			loaded: false
		};
	}
	componentDidMount() {
		this.props.recommendInfos.fetchPersonalized(6);
		this.props.recommendInfos.fetchHighquality(6);
	}
	render() {
		console.log(this.props.data.highqualityRedux)
		let highqualityList = this.props.data.highqualityRedux;
		let personalizedList = this.props.data.personalizedRedux;
		const songs = personalizedList.map((data, index) => {
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
		const highquality = highqualityList.map((data, index) => {
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
				{ this.props.data.highqualityRedux !== '[]' ?
					<div className="recommend_content_songs">
						<h2 className="recommend_title">推荐歌单</h2>
						<ul>
							{ songs }
						</ul>
						<h2 className="recommend_title">精品歌单</h2>
						<ul>
							{ highquality }
						</ul>
					</div>:
					<Loading/>
				}
				
				
      		</div>
		);
	}

}

export default Recommend;