/*
* @Author: chenchao
* @Date: 2018-04-03 14:36:14
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-18 10:35:22
*/

import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'; //代替ExtractTextPlugin，官方推荐, 支持从异步加载的js中分离出css
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';  //css压缩工具
import CleanWebpackPlugin from 'clean-webpack-plugin';  //清除dist目录插件
import ZipWebpackPlugin from 'zip-webpack-plugin';  //打包完成后dist目录压缩成zip
import ManifestPlugin from 'webpack-manifest-plugin'; //文件映射路径
import { envName } from './env.js';

export default [
    //提取出来的样式放在[name].css文件中*/   For long term caching use filename: "[contenthash].css". Optionally add [name].
    new MiniCssExtractPlugin({
        filename: '[name]_[contenthash:8].css'
    }),
    //webpack4中process.env.NODE_ENV默认为production
    /*new webpack.DefinePlugin({
        __DEV__: false,
        __PROD__: true,
    }),*/
    new OptimizeCssAssetsPlugin({  //css压缩去除注释
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: {removeAll: true } },
        canPrint: true            
    }),    
    // new ManifestPlugin({
    //     fileName: 'manifest.json',
    //     basePath: `${process.cwd()}/dist/`
    // }),    
    new CleanWebpackPlugin(
        ['uploadZip','dist'],  //清空文件夹名称
        {   root: process.cwd(),  //根目录
            verbose: false,  //是否在控制台输出
            dry: false,  //false直接删除文件  true模拟删除
            exclude: [''], //排除不删除的目录
            watch: false,  //true删除文件重新编译
            allowExternal: false  //允许是否在webpack跟外清除文件夹，默认false 不允许
        }
    ),
    new ZipWebpackPlugin({
        path: '../uploadZip',  //相对于根目录
        filename: 'w4.zip'
    }),
]