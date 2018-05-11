import React, { Component } from 'react';
import { Link,Route } from 'react-router-dom';

import Page from './page'


export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <div>
                <Link to="page">进入下一个页面</Link>
            </div>
            
        );
    }
}