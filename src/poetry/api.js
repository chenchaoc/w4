/*
* @Author: chenchao
* @Date: 2018-04-20 16:10:36
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-24 18:30:44
*/

let baseUrl = ''
if (process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'production') {
    baseUrl = 'https://www.easy-mock.com/mock/5add7e95fe29a6045d0a7baa/study/'
}

const apiMap = {
    all: 'all',
    homeList: 'homeList',
    itemInfo: 'itemInfo'
}

export default function(name, ...arg) {
    return cm.ajax(`${baseUrl}${apiMap[name]}.action`, ...arg)
}