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
            history: localStore.getItem('search_history') ? localStore.getItem('search_history').split(',') : []
        };
        this.setHistory = this.setHistory.bind(this);
        this.handleSearchHot = this.handleSearchHot.bind(this);
        this.clearHistory = this.clearHistory.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.keyUp = this.keyUp.bind(this)
    }

    handleOchangTitle(event) {
        this.setState({
            message: event.target.value
        })
    }
    keyUp(e) {
        if (e.keyCode === 13) {
            this.props.searchInfos.fetchSearch(this.state.message, 6);
            this.setHistory(this.state.message);
        }
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

    clearHistory(text) {
        const historyArr = localStore.getItem('search_history').split(',');
        const index = historyArr.indexOf(text);
        historyArr.splice(index, 1);
        localStore.setItem('search_history', historyArr);
        this.setState({
            history: historyArr
        });
    }

    clearAll() {
        localStore.setItem('search_history', '');
        this.setState({
            history: []
        });
    }

    setHistory(data) {
        this.state.history.push(data);
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
                return <li className='item' key={index} onClick={ this.handleSearchHot }>{ value.first }</li>
            })
        }
        return (
            <div>
                <Head title="网易云音乐"></Head>
                <div className="seachr_content">
                    <div className="search_input">
                        <i className="icon_sec"></i>
                        <input type="input" value={ this.state.message } placeholder="搜索歌曲、歌手、专辑" onKeyUp={this.keyUp} onChange={this.handleOchangTitle.bind(this)}/>
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
                        this.state.message != '' &&
                        <div className="search_list"> 
                            <ul>
                                { list }
                            </ul>
                        </div>
                        
                    }  
                    {
                        this.state.message == '' &&
                        <div className="search_hotlist">
                            <h3 className="search_hotlist_title">
                                热门搜索
                            </h3>
                            <ul className="search_hotlist_list">
                                { hotlist }
                            </ul>
                        </div>
                    }
                    {   
                        this.state.message == '' &&
                        <div className="searchHistory">
                            <h3 className="searchHistory_title">
                                    搜索列表
                                    <span onClick={this.clearAll}>清除历史</span>
                            </h3>
                            {
                                this.state.history.length > 0 ? this.state.history.map((ele, index) => {
                                    return (
                                        <p key={index}>
                                            <span onClick={this.handleSearchHot}>{ele}</span>
                                            <em onClick={() => this.clearHistory(ele)}>&times;</em>
                                        </p>
                                    )
                                }) : null
                            }
                        </div>
                    }
                    
                </div>
            </div>

        )

    }

}