import React, {
    Component
} from 'react';
import {
    Link
} from 'react-router-dom';

import './header.css'
class Title extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="head">
                <div className='head_top'>
                    <h1>
                        {this.props.title}
                    </h1>
                </div>
	            <div className="head_bottom">
                    <ul>
                        <li>
                            <Link to="/">推荐音乐</Link>
                        </li>
                        <li>
                            <Link to="/song">热歌榜</Link>
                        </li>
                        <li>
                            <Link to="/seachr">搜索</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Title;