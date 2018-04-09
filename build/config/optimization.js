/*
* @Author: chenchao
* @Date: 2018-04-03 15:25:49
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-08 14:15:42
*/
//https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693?utm_source=aotu_io&utm_medium=liteo2_web
export default {
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor', //
                chunks: 'all'
            }
        }
    }
}