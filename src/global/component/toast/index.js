/*
* @Author: chenchao
* @Date: 2018-04-09 18:36:32
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-09 18:37:41
*/

import Toast from './toast.js';
/**
 * [description]
 * @param  {[object]} options [description] {content: '',type: 'info/success/error/warning'}
 * @return {[type]}         [description]
 */
export default function(options) {
    let container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Toast {...options} />, container);
    setTimeout(() => {
        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
    }, 2000)
}