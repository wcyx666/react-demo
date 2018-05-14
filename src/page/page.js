import React, {
	Component
} from 'react';
import axios from 'axios';

class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: ''
		};
	}
	render() {
		return (
			<div className="page">
				<div>
					详情页面
				</div>
      		</div>
		);
	}
	componentDidMount() {
		let id = this.props.match.params.id;
		let that = this;
		console.log(id);
		axios.get('http://musicapi.leanapp.cn/album/', {
            params: {
                id: id,
            }
        })
        .then(function(res) {
            console.log(res)
            that.setState({
                data: res.data.result.songs
            });
        })
        .catch(function(error) {
            console.log(error)
        });

    }
}

export default Page;