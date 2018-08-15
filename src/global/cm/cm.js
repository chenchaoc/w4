/*
* @Author: chenchao
* @Date: 2018-04-03 14:45:13
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-08-15 13:08:39
*/

import axios from 'axios';
//所有api地址
const urls = {
    'dev': {
      mApi: 'https://www.easy-mock.com/mock/5add7e95fe29a6045d0a7baa/study/',
      pApi: 'https://www.easy-mock.com/mock/5add7e95fe29a6045d0a7baa/study/'
    },
    'test': {
      mApi: '//mtest.chenchaoc.top/',
      pApi: '//test.chenchaoc.top/'
    },
    'beta': {
      mApi: '//mbeta.chenchaoc.top/',
      pApi: '//beta.chenchaoc.top/'
    },
    'prod': {
      // mUrl: '//m.chenchaoc.top/',
      mApi: 'https://www.easy-mock.com/mock/5add7e95fe29a6045d0a7baa/study/',
      // pUrl: '//www.chenchaoc.top/'
      pApi: 'https://www.easy-mock.com/mock/5add7e95fe29a6045d0a7baa/study/'
    }
  }
// 注入window.pageConfig
window.pageConfig = urls[process.env.GLOBAL_ENV]

/**
 * [changeDocTitle 标题修改]
 * @param  {[string]} title [description]
 * @return {[type]}       [description]
 */
export function changeDocTitle(title) {
  document.title = title
  // 在webview或微信浏览器中，可能需要再触发一次文档更新才能使document.title生效
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = 'javascript:void(0)' // 使用空iframe，减小请求
  iframe.onload = function () {
    setTimeout(() => iframe.parentNode.removeChild(iframe), 0)
  }
  document.body.appendChild(iframe)
}

/**
 * [公共ajax]
 * @param  {String} url  [请求url]
 * @param  {Object} data [请求参数]
 * @param  {Object} options [axios设置]
 * @return {Promise}     [返回结果]
 */
export function ajax(url, data={}, options={}){
  return axios.post(`${urls[process.env.GLOBAL_ENV].pApi}${url}`, Object.assign({}, {_t: new Date().getTime()}, data), ...options).then(res => res.data)
}
/**
 * [ajaxOrder 按顺序发送ajax并执行每个回调，最终返回返回值的数组]
 * @param  {[Function|Promise]} args [每个函数必须带上 * yield]
 * @return {[Promise]}           [description]
 */
export async function ajaxOrder(...args){
    const promises = args.map(gen => ({gen, promise: gen.next().value}))
    let result = []
    let hasErr = false
    for(const {gen, promise} of promises){
        try {
            result.push(await promise)
        } catch (err){
            result.push(err)
            hasErr = true
        } finally {
            gen.next(promise)
        }
    }
    if(hasErr) {
        throw result
    }
    return result
}
