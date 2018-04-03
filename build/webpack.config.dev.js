/*
* @Author: chenchao
* @Date: 2018-04-03 14:36:04
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-03 18:18:44
*/

import entry from './config/entry.js';
import alias from './config/alias.js';
import loaders from './config/loaders.js';
import basePlugins from './config/basePlugins.js';
import devPlugins from './config/devPlugins.js';
import optimization from './config/optimization.js';

export default {
    mode: 'development',
    context: `${process.cwd()}/src`,
    entry,
    optimization,
    output: {
        path: `${process.cwd()}/dist`,
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name][id].js' //代码分割时非入口文件js的命名规则        
    },
    resolve: {
        extensions: [".js", ".jsx", ".css", ".scss"], //自动解析确定的扩展
        alias
    },
    devtool: 'source-map',
    watch: true,
    stats: 'errors-only',
    module: {
        rules: loaders,
    },
    plugins: [...basePlugins,...devPlugins]
}