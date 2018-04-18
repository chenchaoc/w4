/*
* @Author: chenchao
* @Date: 2018-04-03 14:43:47
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-18 11:13:51
*/
import webpack from 'webpack';
//import ExtractTextPlugin from 'extract-text-webpack-plugin'; //作者还没更新，必须install 4.0.0beta版
import MiniCssExtractPlugin from 'mini-css-extract-plugin'; //代替ExtractTextPlugin，官方推荐, 支持从异步加载的js中分离出css
import { BundleAnalyzerPlugin }  from 'webpack-bundle-analyzer';

export default [
    new MiniCssExtractPlugin({filename: '[name].css'}), //提取出来的样式放在[name].css文件中*/
    //webpack4中process.env.NODE_ENV默认为development
    /*new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"',
        __DEV__: true,
        __PROD__: false,
    }),*/
    new webpack.HotModuleReplacementPlugin(), //热更新
    new BundleAnalyzerPlugin(), //可视化观看打包后的文件
]