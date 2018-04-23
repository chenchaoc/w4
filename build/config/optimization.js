/*
* @Author: chenchao
* @Date: 2018-04-03 15:25:49
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-23 17:58:52
*/
//https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693?utm_source=aotu_io&utm_medium=liteo2_web
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

export default {
    //runtimeChunk: {
    //    name: 'manifest'
    //},
    minimizer: [
      new UglifyJsPlugin({  //js压缩工具 //产品模式没有把console.log去掉，所以重写，否则的话mode为production情况下自动压缩
          uglifyOptions: {
              // 删除所有的console语句 产品模式删除  开发模式显示
              // 还可以兼容ie浏览器
              output: {
                comments: false, //去掉注释
                beautify: false //压缩成只有一整行
              },
              compress: {
              // 删除所有的console语句 产品模式删除  开发模式显示
              // 还可以兼容ie浏览器
                drop_console: true
              },
              //Enable IE8 Support
              //ie8: true,
              //Enable work around Safari 10/11 bugs in loop scoping and await
              //safari10: true,
          }
      })      
    ],
    splitChunks: {
        cacheGroups: {
            vendor: { //所有从node_modules引入的包均打包至vendor.js，此时并不是最精简的？出现告警超过244KB...
                //test: /[\\/]node_modules[\\/]/,
                name: 'vendor', 
                chunks: 'initial',
                priority: -10,
                minChunks: 2,
                reuseExistingChunk: true,                
            },
            common: { //
              name: 'common',
              chunks: 'initial',
              minChunks: 2,
              test: /[\\/]src[\\/]/,
              priority: -5,
              reuseExistingChunk: true,
            },       
/*            styles: { //会把所有css文件集合为一个styles.css，同时有一个styles.js文件,此时从异步加载的js中分离css就没有用了，而是全部打包在了一起
                name: 'styles',
                test: /\.[s]?css$/,
                chunks: 'all',
                enforce: true
            }*/
        }
    }
}