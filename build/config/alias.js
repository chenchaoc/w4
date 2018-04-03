/*
* @Author: chenchao
* @Date: 2018-04-03 14:42:20
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-03 15:38:16
*/
const cwd = process.cwd() //返回 Node.js 进程当前工作的目录

export default {
    utils: `${cwd}/src/global/utils/utils.js`,
    cm: `${cwd}/src/global/cm/cm.js`,
    '@global': `${cwd}/src/global`,
    '@globalcomponent': `${cwd}/src/global/component`,
}