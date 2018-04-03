/*
* @Author: chenchao
* @Date: 2018-03-30 16:56:57
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-03 19:24:59
*/

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ManifestPlugin from 'manifest-webpack-plugin';
import webpack from 'webpack';

export default {
    mode: 'development',
    watch: true,
    devtool: 'eval-source-map',
    entry: {
        bundle: './src/app.js'
    },
    devServer: {
        contentBase: './dist' //启用webpack-dev-server所加载的页面所在的目录,因为output配置的是dist
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/', //启用webpack-dev-middleware和webpack-hot-middleware时的根目录
    },
    resolve: {
        extensions: ['.js', '.jsx'] //自动解析确定的扩展
    },
    stats: "errors-only", 
    module: {
        rules: [
            { //模块规则
                test: /\.js[x]?$/, //匹配文件
                exclude: /node_modules/, //排除node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react','env']
                    }                    
                }
            }, {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }]
            }, {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            }, {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[sha512:hash:base64:7].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //webpack-dev-server热更新
        new webpack.NoEmitOnErrorsPlugin(), //webpack-dev-server热更新 // Use NoErrorsPlugin for webpack 1.x
        new ManifestPlugin(path.join('dist', 'manifest.json')),
        new HtmlWebpackPlugin({
            title: 'webpack4',
            filename: 'index.html',
            template: './src/index.html',
            inject: 'body'
        }),
        //new CleanWebpackPlugin(['dist']),
        new webpack.ProvidePlugin({  //全局载入的可以调用的组件名称
            React: 'react',
            ReactDOM: 'react-dom',
        })        
    ]
}




