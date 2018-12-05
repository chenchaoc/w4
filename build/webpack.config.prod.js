/*
* @Author: chenchao
* @Date: 2018-04-03 14:36:04
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-09-18 17:46:41
*/

import entry from './config/entry.js';
import alias from './config/alias.js';
import loaders from './config/loaders.js';
import basePlugins from './config/basePlugins.js';
import prodPlugins from './config/prodPlugins.js';
import optimization from './config/optimization.js';
import { envConfig } from './config/env.js';

export default {
    mode: 'production',
    context: `${process.cwd()}/src`,
    entry,
    optimization,
    performance: { //The following asset(s) exceed the recommended size limit (244 KiB)  单个文件超过244K不会出现告警
        hints: false
    },
    output: {
        path: `${process.cwd()}/dist`,
        publicPath: envConfig.publicPath,
        filename: '[name]_[chunkhash:8].js',
        //chunkFilename: '[name][id].js'
    },
    resolve: {
        extensions: [".js", ".jsx", ".css", ".scss"],
        alias, //文件路径别名
    },
    module: {
        rules: loaders,
    },
    plugins: [...basePlugins,...prodPlugins]
}