/*
* @Author: chenchao
* @Date: 2018-04-03 14:43:47
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-03 15:43:03
*/
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin'; //作者还没更新，必须install 4.0.0beta版

export default [
    new ExtractTextPlugin("[name].css"), //提取出来的样式放在[name].css文件中*/
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"',
        __DEV__: true,
        __PROD__: false,
    }),
    new webpack.HotModuleReplacementPlugin(), //热更新
    new webpack.NoEmitOnErrorsPlugin()
]