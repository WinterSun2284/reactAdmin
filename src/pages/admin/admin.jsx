import React, {Component} from 'react';
import {Redirect,Route,Switch} from "react-router-dom";
import {Layout} from "antd";


import memoryUtils from "../../utils/memoryUtils";
import LeftNav from "../../components/left-nav";
import Header from "../../components/header";
import Home from "../home/home";
import Category from "../category/category";
import Product from "../product/product";
import Role from "../role/role";
import User from "../user/user";
import Bar from "../charts/Bar";
import Line from "../charts/line";
import Pie from "../charts/pie";

const {Footer, Sider, Content} = Layout

/*
后台管理路由组件
 */
class Admin extends Component {
    render() {
        const user = memoryUtils.user;
        if (!user || !user._id) {
            //自动跳转到登录
            return <Redirect to='/login'/>
        }
        return (
            <Layout style={{height:"100%"}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header>
                    </Header>
                    <Content style={{backgroundColor:"#fff"}}>
                        <Switch>
                            <Redirect from='/' exact to='/home'/>
                            <Route path='/home' component={Home}/>
                            <Route path='/category' component={Category}/>
                            <Route path='/product' component={Product}/>
                            <Route path='/user' component={User}/>
                            <Route path='/role' component={Role}/>
                            <Route path="/charts/bar" component={Bar}/>
                            <Route path="/charts/pie" component={Pie}/>
                            <Route path="/charts/line" component={Line}/>
                        </Switch>
                    </Content>
                    <Footer style={{textAlign:"center",color:"#ccc"}}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Admin;