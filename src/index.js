/*
入口js
 */
import React from 'react'
import ReactDOM from 'react-dom'
// import 'antd/dist/antd.css'

import App from './App'
//读取local中保存的user
import storageUtils from "./utils/storageUtils";
import memoryUtils from "./utils/memoryUtils";

memoryUtils.user = storageUtils.getUser();

//将App组件渲染到index页面的div上
ReactDOM.render(<App/>,document.getElementById('root'))