import React, {Component} from 'react';

class Title extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
        	<div className="head">
	            <h1>
	            	{this.props.title}
	            </h1>
            </div>
        );
    }
}

export default Title;