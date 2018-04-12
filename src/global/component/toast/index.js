/*
* @Author: chenchao
* @Date: 2018-04-09 18:36:32
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-11 18:39:23
*/

import Toast from './toast.js';

/**
 * [弹出提示2s后消失]
 * @param  {[string]} text    [toast文字]
 * @param  {[object]} options [toast类型]
 * @return {[type]}         [description]
 */

export default function(text, options) {
    let o;
    if (options) {
        options.text = text
        o = options
    } else {
        o = {
            text
        }
    }
    let container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Toast { ...o } />, container);
    setTimeout(() => {
        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
    }, 2000)
}