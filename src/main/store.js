/*
* @Author: chenchao
* @Date: 2018-04-04 15:34:23
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-04 15:39:13
*/
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers.js';

export default createStore(reducers)