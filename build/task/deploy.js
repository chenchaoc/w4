/*
* @Author: chenchao
* @Date: 2018-04-03 14:38:15
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-12 18:46:29
*/

import promptly from 'promptly'; //https://www.npmjs.com/package/promptly  命令行提示工具
import Ftp from 'ftp'; //https://www.npmjs.com/package/ftp nodeJs ftp工具
import chalk from 'chalk'; //命令行画笔改变颜色
import deployConfig from '../config/deployConfig.js';

function uploadFtp() {
    return new Promise((resolve,reject) => {
        try {
          const ftpClient = new Ftp()
          const { catalog, project, zipFilePath, ftp } = deployConfig
          ftpClient.on('ready', function () {
            ftpClient.list(`${catalog}/${project}`, function (err, list) {
              console.log(`远程站点目录/${project}最新5个：`)
              console.log(list.slice(-5).map(f => `　　${chalk.cyan.bold(f.name)}　${f.date.toLocaleString()}`).join('\n'))
              const oldVersion = list[list.length - 1].name
              let defaultVersion = oldVersion
              if (Date.now() - list[list.length - 1].date >= 24 * 60 * 60 * 1000) { // 超过1天，版本号+1
                defaultVersion = oldVersion.replace(/(\d+)\.\d+$/, (d) => parseInt(d) + 1) + '.0'
              }
              promptly.prompt(`请输入新版本号(${chalk.yellow.bold(defaultVersion)})开始上传:`, {
                default: defaultVersion,
                validator(version) {
                  if (!/^\d\.\d\.\d{1,3}(\.\d{1,3})?$/.test(version)) {
                    throw new Error(`${chalk.cyan.bold(version)} format error`)
                  } else {
                    // oldVersion < version
                    let v1 = oldVersion.split('.'), v2 = version.split('.'), l = Math.min(v1.length, v2.length)
                    if (!v2.every((v, i) => v == 0 && v1[i] != 0 ? parseInt(v2[i-1]) > parseInt(v1[i-1]) : parseInt(v) >= parseInt(v1[i]))) {
                      throw new Error(`${chalk.cyan.bold(version)} must gte ${chalk.yellow.bold(oldVersion)}`)
                    }
                  }
                  return version
                },
                retry: false
              }, function (err, version) {
                if (err) {
                  console.error('Invalid version:', chalk.red.bold(err.message))
                  return err.retry()
                }
                ftpClient.mkdir(`${catalog}/${project}/${version}`, function (err) {
                  ftpClient.put(zipFilePath, `${catalog}/${project}/${version}/${project}.zip`, function (err) {
                    ftpClient.list(`${catalog}/${project}/${version}`, function (err, list) {
                      console.log(`已上传至目录/${catalog}/${project}/${version}：`)
                      console.log(list.slice(-5).map(f => `　　${chalk.yellow.bold(f.name)}　${f.date.toLocaleString()}`).join('\n'))
                      console.log(`\nFTP地址：ftp://${ftp.host}/${catalog}/${project}/${version}/${project}.zip`)
                      ftpClient.end()
                      resolve()
                    })
                  })
                })
              })
            })
          })
          ftpClient.connect(ftp)
        } catch (err) {
          ftpClient.destroy()
          reject(err)
        }
    })
}

export default async function deploy() {
    console.log(chalk.cyan('\n--------- 部署开始 -------'))
    await uploadFtp().then(result => {

    }).catch(error => {
        console.log('fail',error)
    })
    console.log(chalk.cyan('\n--------- 部署结束 -------'))
}