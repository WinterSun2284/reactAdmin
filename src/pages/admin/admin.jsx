import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {Layout} from "antd";


import memoryUtils from "../../utils/memoryUtils";
import LeftNav from "../../components/left-nav";
import Header from "../../components/header";

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
                    <Content style={{backgroundColor:"#fff"}}>Content</Content>
                    <Footer style={{textAlign:"center",color:"#ccc"}}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Admin;