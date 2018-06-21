import React, {
	Component
} from 'react';
import './model.css';
export default class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			model: this.props.model
		};
	}
	componentDidMount() {

	}
	render() {
		console.log(this.props)
		return (
			<div>
				{
					this.state.model == 415 ?
					<div className="model">
	                	<span>{this.props.message}</span>
	            	</div>:null
				}
				
            </div>
		)
	}

}