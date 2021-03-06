/*
* @Author: chenchao
* @Date: 2018-04-09 18:36:32
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-05-22 17:51:18
*/

import Toast from './toast.js';

/**
 * [弹出提示2s后消失]
 * @param  {[string]} text    [toast文字]
 * @param  {[object]} options [toast类型]
 * @return {[type]}         [description]
 * 示例 toast('xxx') | toast('xxx', {type: 'info'}) | toast({text: 'xxx',type: 'info'})
 */

export default function(text, options) {
    if (document.querySelector('.toast-box')) {
        return false
    }
    let o;
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
        setTimeout(() => {
            ReactDOM.unmountComponentAtNode(container);
            document.body.removeChild(container);
        }, 2000)
    });
}