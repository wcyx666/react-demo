import React, {
	Component
} from 'react';
import axios from 'axios';
import Head from '../common/header/header';

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
				<Head title = '详情页面'/>
				<div>
					详情页面
				</div>
      		</div>
		);
	}
}

export default Page;