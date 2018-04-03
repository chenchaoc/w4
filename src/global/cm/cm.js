/*
* @Author: chenchao
* @Date: 2018-04-03 14:45:13
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-03 14:46:13
*/

/*
* @Author: chenchao
* @Date: 2017-12-28 14:38:02
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-03-19 11:07:07
*/
import axios from 'axios';
import Loading from '@globalcomponent/loading/loading.js';
import { Fragment } from 'react';

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
 * @return {Promise}     [返回结果]
 */
export function ajax(url,data={}){
    return axios.post(url,data).then(res => res.data)
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
/**
 * [此函数为代码分割|按需加载,importComponent为import异步加载]
 * [asyncComponent description]
 * @param  {[function]} importComponent [description]
 * @param  {[object]} p                 [description]
 * @return {[component]}                [description]
 * https://github.com/thejameskyle/react-loadable 这个是别人写的代码分割插件
 * 实测发现必须在根路由 也就是‘/’ import一次scss文件，否则进入二级路由会报错？？
 */
export function asyncComponent(importComponent,isLoad=true,delay=500) {
    class AsyncComponent extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                component: null,
                isLoading: isLoad
            }            
        }
        async componentDidMount() {
            const {default: component} = await importComponent()
            setTimeout(() => {
                this.setState({
                    isLoading: false,
                    component
                })
            }, delay)
        }
        render(){
            const C = this.state.component;
            const { isLoading } = this.state;
            return (
                <Fragment>
                    <Loading isLoading={isLoading} />
                    { C ? <C {...this.props} /> : null }
                </Fragment>
            )
        }
    }
    return AsyncComponent
}

