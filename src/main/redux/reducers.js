/*
* @Author: chenchao
* @Date: 2018-04-04 15:34:36
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-04 15:41:05
*/

import { combineReducers } from 'redux';
import { GO_LOGIN, OUT_LOGIN } from './actions.js';

function isLogin(state = false, action){
    switch (action.type){
        case GO_LOGIN:
            return true
        case OUT_LOGIN:
            return false
        default:
            return state
    }
}


export default combineReducers({
    isLogin
})