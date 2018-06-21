import React, {
    Component
} from 'react';

import {
    createPost
} from '../../actions/my'

import Head from '../../common/return-header/return-head'
import * as localStorage from '../../utils/localStorage'
//=====组件=====
class My extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        console.log(this.props.info.loginRedux)
        return (
            <div className="my">
                <Head title="我的"/>
                <div className="my-list">
                    <ul>
                        <li>我的收藏</li>
                    </ul>
                </div>
            </div>
        );
    }

}


export default My