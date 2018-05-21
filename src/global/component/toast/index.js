/*
* @Author: chenchao
* @Date: 2018-04-09 18:36:32
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-05-21 16:46:53
*/

import Toast from './toast.js';

/**
 * [弹出提示2s后消失]
 * @param  {[string]} text    [toast文字]
 * @param  {[object]} options [toast类型]
 * @return {[type]}         [description]
 */

export default function(text, options) {
    let timer;
    let o;    
    timer && clearTimeout(this.timer);
    if (options) {
        options.text = text
        o = options
    } else {
        if(typeof text == 'object') {
            o = text
        } else if(typeof text == 'string') {
            o = {
                text
            }
        }
    }
    let container = document.createElement('div');
    container.classList.add('toast-box');
    document.body.appendChild(container);
    ReactDOM.render(<Toast { ...o } />, container, () => {
        timer = setTimeout(() => {
            ReactDOM.unmountComponentAtNode(container);
            document.body.removeChild(container);
        }, 2000)
    });
}