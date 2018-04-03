/*
* @Author: chenchao
* @Date: 2018-04-02 18:23:22
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-03 11:41:35
*/

import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware'; 
import webpackHotMiddleware from 'webpack-hot-middleware'; //没有使用webpack-dev-server必须使用这个启用HMR
import webpackConfig from './webpack.config.babel.js';
import connectHistoryApiFallback from 'connect-history-api-fallback';

const hotclient = ['webpack-hot-middleware/client?noInfo=true&reload=true'];
const entry = webpackConfig.entry;
Object.keys(entry).forEach((name) => {
  const value = entry[name]
  if (Array.isArray(value)) {
    value.unshift(...hotclient)
  } else {
    entry[name] = [...hotclient, value]
  }
})

const app = express();
const compiler = webpack(webpackConfig)

app.use(connectHistoryApiFallback({verbose: false}))

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,   
}))

app.use(webpackHotMiddleware(compiler, {
    log: false //如果不写则会报错  opts.log is not a function 官方文档：A function used to log lines, pass false to disable. Defaults to console.log
}))

app.listen(3000, function() {
    console.log('Example app listening on port http://10.7.248.232:3000')
})