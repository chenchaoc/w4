/*
* @Author: chenchao
* @Date: 2018-04-12 18:39:04
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-07-17 16:15:55
*/
export default {
  project: 'react-app',
  description: '本文件是自动化上传的配置文件，versionType为Enum(0,1,2)。0是指自动管理版本号，1是指手动管理版本号，2是根据manifest文件管理',
  versionType: 2,
  api: {
    uploadSuffix: '/resource/uploadAuto.do',
    openAutoSuffix: '/resource/openAuto.do',
    versionSuffix: '/resource/getResourceVersion.do'
  },
  serverEnv: {
    test: {
      serverUrl: 'xxx', //项目服务端地址
      projectId: '0' //项目编号
    },
    beta: {
      serverUrl: 'xxx', //项目服务端地址
      projectId: '1' //项目编号
    }
  },
  zipFilePath: `${process.cwd()}/uploadZip/w4.zip`, //本地目录
}