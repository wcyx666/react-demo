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
            return <li className='item' key={index}><Link to={'/detail/'+value.id}>{value.name}</Link></li>
        })
        const hotlist = this.state.hotlist.map((value, index) => {
            return <li className='item' key={value} onClick={ this.handleClickText.bind(this) }>{ value }</li>
        })
        return (
            <div>
                <Head title="网易云音乐"></Head>
                <div className="seachr_content">
                    <div className="search_input">
                        <i className="icon_sec"></i>
                        <input type="input" value={ this.state.message } placeholder="搜索歌曲、歌手、专辑" onChange={this.handleClickOnTitle.bind(this)}/>
                        {
                           this.state.message != '' && 
                           <i className="icon_close" onClick={ this.handleClickNUll.bind(this) }></i>
                        }
                        
                    </div>
                    {
                        this.state.message != '' &&
                        <div className="f_thide">
                            搜索"{ this.state.message }"
                        </div> 
                    }
                    {
                        this.state.message != '' ? (
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
        this.setState({
            message: event.target.value
        })
        axios.get('http://localhost:3001/search/', {
                params: {
                    type: 1,
                    limit: 6,
                    keywords: event.target.value
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
    handleClickNUll(event) {
        this.setState({
            data: [],
            message: ''
        })
    }
    handleClickText(event) {
        let that = this;
        that.setState({
            message: event.target.innerHTML
        })
        axios.get('http://localhost:3001/search/', {
                params: {
                    type: 1,
                    limit: 6,
                    keywords: event.target.innerHTML
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