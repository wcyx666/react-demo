import React, {
    Component
} from 'react';
import {
    Link
} from 'react-router-dom';
import axios from 'axios';

import Head from '../../common/header/header';

import * as localStore from '../../utils/localStorage';

// 引入CSS
import './seachr.css'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            message: "",
            history: []
        };
        this.setHistory = this.setHistory.bind(this);
    }
    handleOchangTitle(event) {
        this.setState({
            message: event.target.value
        })
        this.setHistory(event.target.value);
        // 搜索
        this.props.searchInfos.fetchSearch(event.target.value);
    }
    handleClickNUll(event) {
        this.setState({
            data: [],
            message: ''
        })
    }
    componentDidMount() {
        // 热搜列表
        this.props.searchInfos.fetchSearchHot();
    }
    handleSearchHot(event) {
        this.setState({
            message: event.target.innerText
        })
        this.setHistory(event.target.innerText);
        // 搜索
        this.props.searchInfos.fetchSearch(event.target.innerText);
    }
    setHistory(data) {
        this.setState({
            history: this.state.history.push(data)
        });
        const searchHistory = this.state.history;
        let newHistory = [];
        for (let i = 0; i < searchHistory.length; i++) {
            if (newHistory.indexOf(searchHistory[i]) === -1) {
                newHistory.push(searchHistory[i])
            }
        }
        localStore.setItem('search_history', newHistory);
    }
    render() {
        let list, hotlist;
        if (this.props.data.searchRedux !== '[]') {
            list = this.props.data.searchRedux.map((value, index) => {
                return <li className='item' key={index}><Link to={'/detail/'+value.id}>{value.name}</Link></li>
            })
        }
        if (this.props.data.HotsearchRedux !== '[]') {
            hotlist = this.props.data.HotsearchRedux.map((value, index) => {
                return <li className='item' key={index} onClick={ this.handleSearchHot.bind(this) }>{ value.first }</li>
            })
        }
        return (
            <div>
                <Head title="网易云音乐"></Head>
                <div className="seachr_content">
                    <div className="search_input">
                        <i className="icon_sec"></i>
                        <input type="input" value={ this.state.message } placeholder="搜索歌曲、歌手、专辑" onChange={this.handleOchangTitle.bind(this)}/>
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

}