/*
应用中所有请求函数的模块
 */
import ajax from "./ajax";

// export function reqLogin(username,password) {
//     return ajax("/login",{username,password},"POST")
// }
//用户登录
export const reqLogin=(data)=>ajax('/login',data,'POST')
//添加用户
export const reqAddUser=(user)=>ajax('/manage/user/add',user,'POST')