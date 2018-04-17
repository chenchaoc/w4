/*
* @Author: chenchao
* @Date: 2018-04-03 14:42:32
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-17 16:54:19
*/
import MiniCssExtractPlugin from 'mini-css-extract-plugin'; //从js分离出css,代替ExtractTextPlugin,webpack4官方推荐,支持非入口文件的css异步加载

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
            loader: MiniCssExtractPlugin.loader
        }, {
            loader: 'css-loader'
        }, {
            loader: 'postcss-loader'
        }]
    }, {
        test: /\.scss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
        }, {
            loader: 'css-loader'
        }, {
            loader: 'postcss-loader'
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