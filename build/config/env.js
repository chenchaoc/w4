/*
* @Author: chenchao
* @Date: 2018-04-03 15:10:22
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-03 15:10:34
*/
import { argv } from 'yargs'; //可以拿到npm run命令中的字段

// 环境：test|beta|prod，默认prod
export const envName = ['test', 'beta', 'prod'].find(e => argv[e]) || 'prod'

export const envConfig = {
    test: {
        publicPath: '//www.chenchaoc.top/cc-test/'
    },
    beta: {
        publicPath: '//www.chenchaoc.top/cc-beta/'
    },
    prod: {
        publicPath: '//www.chenchaoc.top/cc-prod/'
    }
}[envName]