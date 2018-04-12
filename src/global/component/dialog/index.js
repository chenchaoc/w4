/*
* @Author: chenchao
* @Date: 2018-04-10 16:03:11
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-11 18:39:27
*/
import Dialog from './dialog.js';

export default function(options) {
    let container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Dialog { ...options } />, container);
}