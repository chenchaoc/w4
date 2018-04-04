/*
* @Author: chenchao
* @Date: 2018-04-03 15:25:49
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-04 16:12:23
*/
//https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693?utm_source=aotu_io&utm_medium=liteo2_web
export default {
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor', //要缓存的分隔出来的chunk名称  但是为什么一直是复制了一遍的名字vendorsvendors.js?
                chunks: 'all'
            }
        }
    }
}