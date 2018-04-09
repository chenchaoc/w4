/*
* @Author: chenchao
* @Date: 2018-04-03 14:36:04
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-09 18:34:08
*/

import entry from './config/entry.js';
import alias from './config/alias.js';
import loaders from './config/loaders.js';
import basePlugins from './config/basePlugins.js';
import prodPlugins from './config/prodPlugins.js';
import { envConfig } from './config/env.js';
import optimization from './config/optimization.js';

export default {
    mode: 'production',
    context: `${process.cwd()}/src`,
    entry,
    optimization,
    output: {
        path: `${process.cwd()}/dist`,
        publicPath: envConfig.publicPath,
        filename: '[name]_[hash:8].js',
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