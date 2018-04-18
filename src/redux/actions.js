/*
* @Author: chenchao
* @Date: 2018-04-04 15:40:32
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-04 15:51:42
*/
export const GO_LOGIN = 'GO_LOGIN';
export const OUT_LOGIN = 'OUT_LOGIN';

export function goLogin(data){
    return {
        type: GO_LOGIN,
        data
    }
}

export function outLogin(data){
    return {
        type: OUT_LOGIN,
        data
    }
}