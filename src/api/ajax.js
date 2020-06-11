/*
能发送异步请求的函数模块
 */
import Axios from "axios"
import {message} from "antd";

export default function ajax(url, data = {}, type = 'GET') {

    return new Promise((resolve) => {
        let promise
        if (type === 'GET') {
            promise = Axios.get(url, {params: data})
        } else {
            promise = Axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            })
        }
        promise.then(response=>{
            resolve(response.data)
        }).catch(error=>{
            message.error("请求出错了："+error.message)
        })
    })
}