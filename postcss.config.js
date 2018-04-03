/*
* @Author: chenchao
* @Date: 2018-04-03 15:57:20
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-03 15:57:33
*/
module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: ['last 2 version', 'iOS >= 7', 'Android >= 4']
        })
    ]
};