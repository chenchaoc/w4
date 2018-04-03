/*
* @Author: chenchao
* @Date: 2018-04-03 14:42:32
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-03 15:50:53
*/
import ExtractTextPlugin from 'extract-text-webpack-plugin';

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
        use: ExtractTextPlugin.extract({ 
            fallback: 'style-loader',
            use: ['css-loader','postcss-loader']
        })
    }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({ 
            fallback: 'style-loader',
            use: ['css-loader','postcss-loader','sass-loader']
        }),
    }, {
        test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg|swf|jpeg)$/,
        loader: 'file-loader',
        options:{
            name: '[name]_[sha512:hash:base64:7].[ext]'
        }
    }    
]