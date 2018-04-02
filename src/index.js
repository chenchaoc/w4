/*
* @Author: chenchao
* @Date: 2018-03-30 16:59:25
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-02 11:31:55
*/

import _ from 'lodash';
import './index.css';
import cc from './cc.jpeg';
function component() {
    let element = document.createElement('div')
    element.innerHTML = _.join(['hello-chenchao', 'webpack'],' ');
    const myImg = new Image();
    myImg.src = cc;
    element.appendChild(myImg)
    return element
}

document.body.appendChild(component())