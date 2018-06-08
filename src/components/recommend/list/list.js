import React, {
	Component
} from 'react';
import axios from 'axios';
import Head from '../../../common/return-header/return-head';
import {
	Link
} from 'react-router-dom';
import createHistory from "history/createBrowserHistory"

// 引入CSS
import './list.css'

class RecomList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recomInfo: "",
			recomList: []
		};
	}
	componentDidMount() {
		let id = this.props.match.params.id;
		this.props.RecomListInfos.fetchPlayList(id);

	}
	render() {
		console.log(this.props.data.playListRedux.list)
		let recomList = this.props.data.playListRedux.list;
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
				<Head title={ this.state.recomInfo.name }></Head>
				<div className="recom_list_head">
					<div className="recom_list_head_left">
						<img src={ this.state.recomInfo.coverImgUrl } art=""/>
					</div>
					<div className="recom_list_head_right">
						<h2>
							{ this.state.recomInfo.name }
						</h2>
					</div>
				</div>	
				<div className="recom_list_music">
					<ul>
						{ result }
					</ul>
				</div>
			</div>
		);
	}
}

export default RecomList;