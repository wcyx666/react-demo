import React, {
	Component
} from 'react';
import axios from 'axios';
import Head from '../../../common/return-header/return-head';
import {
	Link
} from 'react-router-dom';
import createHistory from "history/createBrowserHistory"
import Loading from '../../../common/loading/loading';
import request from '../../../utils/http'
import API from '../../../utils/api'

// 引入CSS
import './list.css'

class RecomList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recomInfo: "",
			recomList: [],
			loaded: false
		};
	}
	componentDidMount() {
		let id = this.props.match.params.id;
		request.asyncGet(`http://localhost:3001${API.playlist}?id=${id}`).then(res => res.json()).then(resData => {
			console.log(this.props)
			this.props.RecomListInfos.PlayList(resData.result.tracks);
			this.props.RecomListInfos.PlayInfo(resData.result);
			this.setState({
				loaded: true
			})
		}).catch(err => {
			console.log('Error:' + err);
		})
	}
	render() {
		console.log(this.props)
		let recomList = this.props.data.playListRedux;
		let recomInfo = this.props.data.playInfoRedux;
		let result;
		if (JSON.stringify(recomList) !== '{}') {
			result = recomList.map((val, index) => {
				return (
					<li key={ index }>
						<Link to={ '/detail/'+val.id }>
							<i className="num sgi_fl">{ index+1 }</i>
							<div className="info">
								<div className="info_left">
									<h2 className="name">{ val.name }</h2>
									<p>{ val.album.artists[0].name }-{ val.album.name }</p>
								</div>
								
								<div className="info_right">
									<i></i>
								</div>
							</div>
						</Link>											
					</li>
				)
			});
		}
		return (
			<div className="recom_list">
				<Head title={ recomInfo.name }></Head>
				{this.state.loaded ?
					<div className="recom_list_box">
						<div className="recom_list_head">
							<div className="recom_list_head_left">
								<img src={ recomInfo.coverImgUrl } art=""/>
							</div>
							<div className="recom_list_head_right">
								<h2>
									{ recomInfo.name }
								</h2>
							</div>
						</div>	
						<div className="recom_list_music">
							<ul>
								{ result }
							</ul>
						</div>
					</div> :
					<Loading/>
				}
				
				
			</div>
		);
	}
}

export default RecomList;