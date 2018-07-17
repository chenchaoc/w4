/*
* @Author: chenchao
* @Date: 2018-04-03 15:10:22
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-07-17 15:14:26
*/
import { argv } from 'yargs'; //可以拿到npm run命令中的字段

// 环境：test|beta|prod，默认prod
export const envName = ['dev', 'test', 'beta', 'prod'].find(e => argv[e]) || 'prod'

export const envConfig = {
    dev: {
        publicPath: '/'
    },
    test: {
        publicPath: '//www.chenchaoc.top/w4-test/'
    },
    beta: {
        publicPath: '//www.chenchaoc.top/w4-beta/'
    },
    prod: {
        publicPath: '//www.chenchaoc.top/w4-prod/'
    }
}[envName]