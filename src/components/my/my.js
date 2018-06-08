import React, {
    Component
} from 'react';

import {
    createPost
} from '../../actions/my'

//=====组件=====
class My extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {

        this.props.myInfoAction.fetchMusic()

    }
    render() {
        console.log(this.props.info)
        return (
            <div>
                <h3>新闻页面</h3>
                
            </div>
        );
    }

}


export default My