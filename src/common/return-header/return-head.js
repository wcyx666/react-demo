import React, {
	Component
} from 'react';
import {
	Link
} from 'react-router-dom';
import createHistory from "history/createBrowserHistory"

// 引入CSS
import './return-head.css'

const history = createHistory()

class ReturnHead extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="return_head">
                <div className='return_head_top'>
					<i className="return_head_icon" onClick={ this.goback.bind(this) }></i>
                    <h1 className="return_head_title">
                        {this.props.title}
                    </h1>
                </div>
            </div>
		);
	}

	goback(event) {
		history.goBack();
	}
}

export default ReturnHead;