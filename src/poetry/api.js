/*
* @Author: chenchao
* @Date: 2018-04-20 16:10:36
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-07-17 15:26:48
*/
const apiMap = {
    itemInfo: 'itemInfo'
}

export default function(name, ...arg) {
    return cm.ajax(`${apiMap[name]}.action`, ...arg)
}