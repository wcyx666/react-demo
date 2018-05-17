import React, {
    Component
} from 'react';
import {
    NavLink
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
                            <NavLink exact activeClassName="active" to="/">推荐音乐</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/song">热歌榜</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/seachr">搜索</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Title;