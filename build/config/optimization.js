/*
* @Author: chenchao
* @Date: 2018-04-03 15:25:49
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-12 11:31:19
*/
//https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693?utm_source=aotu_io&utm_medium=liteo2_web
export default {
    splitChunks: {
        cacheGroups: {
            commons: { //所有从node_modules引入的包均打包至vendor.js，此时并不是最精简的？
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor', //
                chunks: 'all'
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