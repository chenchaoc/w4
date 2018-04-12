/*
* @Author: chenchao
* @Date: 2018-04-03 14:38:22
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-04-12 18:40:22
*/

/**
 * 文件上传test/beta环境
 */
import request from 'request';
import fs from 'fs';
import chalk from 'chalk';

import uploadConfig from '../config/uploadConfig.js';
import { envName } from '../config/env.js';

/**
 * 获得版本号
 */
function getVersion(check = false) {
    return new Promise((resolve, reject) => {
        if (check) { // 是否检查版本
            getResourceVersion()
        } else {
            console.log(`准备发布到${chalk.yellow.bold(envName)}环境`)
            getResourceVersion()
        }

        function getResourceVersion() {
            const url = `${uploadConfig.serverEnv[envName].serverUrl}${uploadConfig.api.versionSuffix}`;
            const options = {
                url, 
                form: {
                    folderName: uploadConfig.project
                }, 
                json: true
            };
            request.post(options, (err, res, body) => {
                  if (err || !body || body.status != 1) {
                      reject(err || body)
                  } else {
                      resolve(body.data)
                  }
            })
        }
    })
}

/**
 * 上传资源
 */
function uploadAuto(oldVersion) {
    return new Promise((resolve, reject) => {
        const newVersion = oldVersion.replace(/(\d+)$/, (d) => parseInt(d) + 1);
        console.log(`新版本(${chalk.yellow.bold(newVersion)})正在上传...`);
        
        const url = `${uploadConfig.serverEnv[envName].serverUrl}${uploadConfig.api.uploadSuffix}`;
        const options = { 
            url, 
            formData: {
                project: uploadConfig.serverEnv[envName].projectId,
                versionType: uploadConfig.versionType,
                version: newVersion,
                isCoverVer: 1,
                file: fs.createReadStream(uploadConfig.zipFilePath)
            }, 
            json: true 
        };
        request.post(options, (err, res, body) => {
            // console.log(err, body)
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

/**
 * 自动更新
 */
function openAuto() {
    return new Promise((resolve, reject) => {
        const url = `${uploadConfig.serverEnv[envName].serverUrl}${uploadConfig.api.openAutoSuffix}`;
        const options = { 
            url,
            form: {
                id: uploadConfig.serverEnv[envName].projectId
            },
            json: true 
        };
        request.post(options, (err, res, body) => {
            // console.log(err, body)
            if (err) {
              reject(err)
            } else {
              resolve()
            }
        })
    })
}

/**
 * 上传任务
 */
export default async function upload() {
    console.log(chalk.cyan('\n--------- 发布开始 -------'))
    
    const resourceVersion = await getVersion()
    console.log(`当前版本号：${chalk.yellow.bold(resourceVersion.version)} ${new Date(resourceVersion.updateTime).toLocaleString()}`)
    
    await uploadAuto(resourceVersion.version)
    console.log(chalk.magenta(`  已上传至${chalk.cyan.bold(envName)}环境^_^`))
    
    await openAuto()
    // console.log(chalk.magenta(`  自动更新已打开^_^`))
    
    // check version
    const checkVersion = await getVersion(true)
    console.log(`\n最新版本号：${chalk.yellow.bold(checkVersion.version)} ${new Date(checkVersion.updateTime).toLocaleString()}`)
    
    console.log(chalk.cyan('\n--------- 发布结束 -------'))
}
