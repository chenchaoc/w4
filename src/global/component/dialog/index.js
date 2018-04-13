/*
* @Author: chenchao
* @Date: 2018-04-10 16:03:11
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-13 16:30:52
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
 * @return {[type]}         [description]
 */
export default function(options) {
    let container = document.createElement('div');
    container.classList.add('dialog-box');
    document.body.appendChild(container);
    ReactDOM.render(<Dialog { ...options } />, container);
}