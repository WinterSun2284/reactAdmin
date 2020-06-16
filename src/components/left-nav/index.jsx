import React, {Component} from 'react';
import {Link,withRouter} from "react-router-dom";
import {Menu, Button} from 'antd';
import {
    MenuOutlined,
    HomeOutlined,
    ToolOutlined,
    AppstoreAddOutlined,
    TeamOutlined,
    UserOutlined,
    BarChartOutlined,
    LineChartOutlined,
    PieChartOutlined,
} from '@ant-design/icons';

import "./index.less"
import logo from "../../assets/images/logo.png"

const {SubMenu} = Menu;

/*
左侧导航组件
 */

class LeftNav extends Component {
    constructor(props) {
        super();
        this.state={
            path:'/home'
        }

    }
    render() {
        return (
            <div className="left-nav">
                <Link to='/home' className="left-nav-header">
                    <img src={logo} alt="logo"/>
                    <h1>wintersun</h1>
                </Link>
                {
                    this.currentlySelected()
                }
                <Menu
                    defaultSelectedKeys={this.state.path}
                    // defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                   <Menu.Item key="/home" >
                       <HomeOutlined/>
                        <Link to="/home">首页</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<AppstoreAddOutlined/>} title="商品">
                        <Menu.Item key="/category" icon={<MenuOutlined/>}><Link to="/category">品类管理</Link> </Menu.Item>
                        <Menu.Item key="/product" icon={<ToolOutlined/>}><Link to='/product'>商品管理</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="/user" icon={<UserOutlined />}><Link to="/user">用户管理</Link> </Menu.Item>
                    <Menu.Item key="/role" icon={<TeamOutlined/>}><Link to="/role">角色管理</Link> </Menu.Item>
                    <SubMenu key="sub2" icon={<AppstoreAddOutlined/>} title="图形图表">
                        <Menu.Item key="/charts/bar" icon={<BarChartOutlined />}><Link to="/charts/bar">柱状图</Link> </Menu.Item>
                        <Menu.Item key="/charts/line" icon={<LineChartOutlined />}><Link to='/charts/line'>折线图</Link></Menu.Item>
                        <Menu.Item key="/charts/pie" icon={<PieChartOutlined />}><Link to='/charts/pie'>饼图</Link></Menu.Item>
                    </SubMenu>

                </Menu>
            </div>

        );
    }

    currentlySelected() {
        const path=this
        console.log(path)
    }
}

export default LeftNav;