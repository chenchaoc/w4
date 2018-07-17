/*
* @Author: chenchao
* @Date: 2018-04-03 15:12:35
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-07-17 15:47:15
*/
import ip from 'ip'; //ip地址

export default {
    devServerPort: 6868, // 开发服务器端口号
    proxyTarget: `http://${ip.address()}`, // 代理目标API
    bkdServerPort: 6868
}