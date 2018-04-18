/*
* @Author: chenchao
* @Date: 2018-04-03 15:25:49
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-18 11:02:08
*/
//https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693?utm_source=aotu_io&utm_medium=liteo2_web
export default {
    //runtimeChunk: {
    //    name: 'manifest'
    //},    
    splitChunks: {
        //chunks: 'async',
        //minSize: 30000,
        //minChunks: 1,
        //maxAsyncRequests: 5,
        //maxInitialRequests: 3,
        //name: false,
        cacheGroups: {
            // default: {
            //     minChunks: 2,
            //     priority: -20,
            //     reuseExistingChunk: true
            // },
            vendor: { //所有从node_modules引入的包均打包至vendor.js，此时并不是最精简的？出现告警超过244KB...
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor', 
                chunks: 'all',
                priority: -10,
                reuseExistingChunk: true,                
            },
/*            common: {
              name: 'common',
              chunks: 'initial',
              minChunks: 2,
              test: /[\\/]src[\\/]/,
              priority: -5,
              reuseExistingChunk: true,
            }, */          
/*            styles: { //会把所有css文件集合为一个styles.css，同时有一个styles.js文件,此时从异步加载的js中分离css就没有用了，而是全部打包在了一起
                name: 'styles',
                test: /\.[s]?css$/,
                chunks: 'all',
                enforce: true
            }*/
        }
    }
}