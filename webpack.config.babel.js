/*
* @Author: chenchao
* @Date: 2018-03-30 16:56:57
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-02 11:46:50
*/

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ManifestPlugin from 'manifest-webpack-plugin';

export default{
    mode: 'development',
    watch: true,
    devtool: 'source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'output management'
        }),
        new ManifestPlugin(path.join('dist', 'manifest.json')),
    ]

}