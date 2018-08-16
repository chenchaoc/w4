/*
* @Author: chenchao
* @Date: 2018-04-20 16:10:36
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-08-16 16:17:54
*/
import toast from '@globalcomponent/toast/index.js';

const apiMap = {
    all: 'all',
    homeList: 'homeList',
}

export default function(name, ...arg) {
    return cm.ajax(`${apiMap[name]}.action`, ...arg).then((res) => {
        if (res.errorCode == 0) {
            return res
        }
        return Promise.reject(res)
    }).catch((error) => {
        toast(error.message || '网络异常，请稍后再试')
        return Promise.reject(error)
    })
}