import React, {
	Component
} from 'react';
import axios from 'axios';


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
	render() {
		return (
			<div className="recom_list">
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
						{
							this.state.recomList.map((val,index) => {
								return  <li key={ index }>
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
																						
										</li>
							})
						}
					</ul>
				</div>
			</div>
		);
	}
	componentDidMount() {
		let that = this;
		let id = this.props.match.params.id;
		axios.get('http://localhost:3001/playlist/detail', {
				params: {
					id: id,
				}
			})
			.then(function(res) {
				console.log(res)
				that.setState({
					recomInfo: res.data.result,
					recomList: res.data.result.tracks
				})
			})
			.catch(function(error) {
				console.log(error)
			});

	}
}

export default RecomList;