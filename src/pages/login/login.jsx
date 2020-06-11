import React, {Component} from 'react';
import {Form, Input, Button} from 'antd'
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {message} from "antd";
import {Redirect} from "react-router-dom";

import './login.less'
import logo from './images/logo.png'
import {reqLogin} from '../../api'
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";

/*
登录的路由组件
 */
const form = (state,props) => {
    const handleSubmit = async values => {
        const {username, password} = values
        var param = new URLSearchParams();
        param.append("username", username);
        param.append("password", password)
        //请求登录
        const result = await reqLogin(param);
        //登录成功
        if (result.status===0){
            const user = result.data;
            message.success("登录成功，欢迎："+user.username)
            memoryUtils.user=user//保存在内存中
            storageUtils.saveUser(user)//保存到local中
            //跳转到管理界面(不需要回退到登录)
            props.history.replace("/")
        }
        //登录失败
        else {
            message.error("登录失败："+result.msg)
        }
    }
    return (
        <div className="login">
            <header className="login-header">
                <img src={logo} alt="logo"/>
                <h1>React项目：后台管理系统</h1>
            </header>
            <section className="login-section">
                <h2>用户登录</h2>
                <div>
                    <Form onFinish={handleSubmit} className="login-form">
                        <Form.Item name="username"
                            //声明式验证
                                   rules={[
                                       {
                                           required: true,
                                           message: '请输入用户名',
                                       },
                                       {
                                           min: 4,
                                           message: '用户名长度必须大于4位',
                                       },
                                       {
                                           max: 12,
                                           message: '用户名长度必须小于12位',
                                       },
                                       {
                                           pattern: /^[a-zA-Z0-9_]+$/,
                                           message: '用户名必须是英文、数字、下划线组成'
                                       },
                                   ]}>
                            <Input
                                prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="用户名"/>
                        </Form.Item>
                        <Form.Item name="password"
                                   rules={[
                                       {
                                           required: true,
                                           message: '请输入密码',
                                       },
                                       {
                                           min: 4,
                                           message: '密码长度必须大于4位',
                                       },
                                       {
                                           max: 12,
                                           message: '密码长度必须小于12位',
                                       },
                                   ]}>
                            <Input
                                prefix={<LockOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
                                type="password"
                                placeholder="密码"/>
                        </Form.Item>
                        <Form.Item>
                            <Button type={"primary"} htmlType={"submit"} className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </section>
        </div>
    );
}

class Login extends Component {
    constructor() {
        super();
        this.state = {}
    }
    //如果用户已经登录，自动跳转到管理界面
    render() {
        const user = memoryUtils.user;
        if (user && user._id){
            return <Redirect to="/"/>
        }
        return (
            form(this.state,this.props)
        );
    }
}

export default Login;