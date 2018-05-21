/*
* @Author: chenchao
* @Date: 2018-04-10 16:03:11
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-05-21 18:38:10
*/
import Dialog from './dialog.js';

/**
 * [description]
 * @param  {[object]} options [description]
 *  width  {[number]} [dialog宽度] [default: null]
 *  height {[number]} [dialog高度] [default: null]
 *  title  {[string]} [dialog标题] [default: null]
 *  content  {[string]} [dialog正文] [default: null]
 *  showCloseBtn {[string]} [dialog右上角关闭图标是否展示] [default: true]
 *  closeCb {[function]} [dialog右上角点击关闭回调函数] [default: () => {}]
 *  showConfirmBtn {[string]} [dialog底部按钮] [default: true]
 *  confirmText {[string]} [dialog底部按钮文字] [default: '确认']
 *  confirmCb {[function]} [dialog底部按钮回调函数] [default: () => {}]
 * @return {[Promise]}         [description]
 */
export default function(options) {
    return new Promise((resolve, reject) => {
        let container = document.createElement('div');
        document.body.appendChild(container);
        container.classList.add('dialog-box');
        let os = Object.assign({}, options, {
            confirmCb: () => {
                resolve(ReactDOM.unmountComponentAtNode(container) && document.body.removeChild(container))
            },
            closeCb: () => {
                reject(ReactDOM.unmountComponentAtNode(container) && document.body.removeChild(container))                
            }
        })
        ReactDOM.render(<Dialog { ...os } />, container);
    })
}