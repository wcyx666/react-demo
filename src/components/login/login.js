import React, {
    Component
} from 'react';
import createHistory from "history/createBrowserHistory"
import './login.css'
//=====组件=====
import Head from '../../common/return-header/return-head';
import Model from '../../common/model/model';
import request from '../../utils/http'
import API from '../../utils/api'
import * as localStorage from '../../utils/localStorage'

const history = createHistory()

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            userPassword: "",
            popup: true,
            message: "111"
        };
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangeUserPassWord = this.handleChangeUserPassWord.bind(this);
        this.handleClickLogin = this.handleClickLogin.bind(this);
    }
    componentDidMount() {

    }
    handleChangeUserName(e) {
        this.setState({
            userName: e.target.value
        });
    }
    handleChangeUserPassWord(e) {
        this.setState({
            userPassword: e.target.value
        });
    }
    handleClickLogin() {
        request.asyncGet(`http://localhost:3001${API.login}?phone=${this.state.userName}&password=${this.state.userPassword}`).then(res => res.json()).then(resData => {
            console.log(resData)
            if (resData.code == 200) {
                this.props.loginInfos.Login(resData);
                localStorage.setItem('loginType', resData);
                history.goBack();
            }
        }).catch(err => {
            console.log('Error:' + err);
        })
    }
    render() {
        console.log(this.props)
        return (
            <div className="login">
                <Head title="登录页面"></Head>
                <div className="login-form">
                    <div className="login-form-input">
                        <input type="text" placeholder="手机号码" onChange={this.handleChangeUserName} value={this.state.userName}/>
                    </div>
                    <div className="login-form-input">
                        <input type="password" placeholder="密码" onChange={this.handleChangeUserPassWord} value={this.state.userPassword}/>
                    </div>
                    <div className="login-form-btn">
                        <a href="javascript:void(0)" onClick={this.handleClickLogin}>登录</a>
                    </div>
                </div>
                
            </div>
        );
    }

}


export default Login