import React, {
    Component
} from 'react';

import './login.css'
//=====组件=====
import Head from '../../common/return-header/return-head';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            userPassword: ""
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
        this.props.loginInfos.fetchLogin(this.state.userName, this.state.userPassword);
        let loginData = this.props.info.loginRedux;
    }
    render() {
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