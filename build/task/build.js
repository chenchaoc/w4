/*
* @Author: chenchao
* @Date: 2018-04-03 14:38:30
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-07-17 15:29:07
*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod.js';
import deploy from './deploy.js';
import upload from './upload.js';
import { envName } from '../config/env.js';

webpack(webpackConfig, function(error,stats){
    if(error){
        throw error
    }
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    console.log(stats.toString({
        colors: true,
        hash: false,
        version: true,
        timings: true,
        assets: true,
        chunks: false,
        children: false,
        modules: false
    }))

    if (stats.hasErrors() || stats.hasWarnings()) {
        return
    }
    //集成发版，上传至ftp服务器运维发布
    if( envName == 'prod'){
        deploy();
    } else {
        //upload() 需配置好上传的ip和后端的.do处理文件再运行
    }
})