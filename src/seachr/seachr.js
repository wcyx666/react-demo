import React, {
    Component
} from 'react';
import {
    Link,
    Route
} from 'react-router-dom';
import axios from 'axios';

import Head from '../common/header/header';
import Page from '../page/page'

// 引入CSS
import './seachr.css'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            message: "",
            // 模拟一数据
            hotlist: ['王俊凯', '薛之谦', '防弹少年团', '我们', '于文文', '大壮', '渺小却伟大']
        };
    }
    render() {
        const list = this.state.data.map((value, index) => {
            return <li className='item' key={index}><Link to='/page'>{value.name}</Link></li>
        })
        const hotlist = this.state.hotlist.map((value, index) => {
            return <li className='item' key={value} onClick={ this.handleClickText.bind(this) }>{ value }</li>
        })
        return (
            <div>
                <Head title="网易云音乐"></Head>
                <div class="seachr_content">
                    <div className="search_input">
                        <i className="icon_sec"></i>
                        <input type="input" onKeyDown={this.handleClickOnTitle.bind(this)}/>
                        {
                           this.state.message.length > 0 && 
                           <i className="icon_close" onClick={ this.handleClickNUll.bind(this) }></i>
                        }
                        
                    </div>
                    {
                        this.state.message.length > 0 &&
                        <div className="f_thide">
                            搜索"{ this.state.message }"
                        </div> 
                    }
                    {
                        this.state.message.length > 0 ? (
                            <div className="search_list"> 
                                <ul>
                                    { list }
                                </ul>
                            </div>
                        ) : (
                            <div className="search_hotlist">
                                <h3 className="search_hotlist_title">
                                    热门搜索
                                </h3>
                                <ul className="search_hotlist_list">
                                    { hotlist }
                                </ul>
                            </div>
                        )
                    }
                    
                    
                </div>
            </div>

        )

    }
    handleClickOnTitle(event) {
        let that = this;
        console.log(event.target.value)
        this.setState({
            message: event.target.value
        })
        axios.get('https://api.imjad.cn/cloudmusic/', {

                params: {

                    type: 'search',
                    search_type: '1',
                    s: event.target.value

                }

            })

            .then(function(res) {
                that.setState({

                    data: res.data.result.songs
                });

            })

            .catch(function(error) {

                console.log(error)

            });
    }
    handleClickNUll(event) {
        this.setState({
            message: ''
        })
    }
    handleClickText(event) {
        this.setState({
            message: event.target.innerHTML
        })
    }
    componentDidMount() {


    }
}