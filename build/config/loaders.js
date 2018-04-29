/*
* @Author: chenchao
* @Date: 2018-04-03 14:42:32
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-29 12:18:05
*/
import { loader } from 'mini-css-extract-plugin'; //从js分离出css,代替ExtractTextPlugin,webpack4官方推荐,支持非入口文件的css异步加载

function postcssPlugins() {
    return {
        plugins() {
            return [
                require('autoprefixer')({
                    browsers: ['last 2 version', 'iOS >= 7', 'Android >= 4', 'not ie < 9']
                })
            ]
        }
    }
}

export default [
    { //模块规则
        test: /\.js[x]?$/, //匹配文件
        exclude: /node_modules/, //排除node_modules
        use: {
            loader: 'babel-loader?cacheDirectory',
            options: {
                presets: ['react','stage-0']
            }
        }
    }, {
        test: /\.css$/,
        use: [{
            loader: loader
        }, {
            loader: 'css-loader'
        }, {
            loader: 'postcss-loader',
            options: postcssPlugins()        
        }]
    }, {
        test: /\.scss$/,
        use: [{
            loader: loader
        }, {
            loader: 'css-loader'
        }, {
            loader: 'postcss-loader',
            options: postcssPlugins()
        }, {
            loader: 'sass-loader'
        }]
    }, {
        test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg|swf|jpeg)$/,
        use: [{
            loader: 'file-loader',
            options:{
                name: '[name]_[sha512:hash:base64:7].[ext]'
            }
        }]
    }    
]