/*
* @Author: chenchao
* @Date: 2018-04-03 15:25:49
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-12 10:30:33
*/
//https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693?utm_source=aotu_io&utm_medium=liteo2_web
export default {
    splitChunks: {
        cacheGroups: {
            commons: { //所有从node_modules引入的均打包至vendor.js
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor', //
                chunks: 'all'
            },
            styles: { //会生成一个专门来处理非入口文件内的css的js文件
                name: 'styles',
                test: /\.css$/,
                chunks: 'all',
                enforce: true
            }            
        }
    }
}