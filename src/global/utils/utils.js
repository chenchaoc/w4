/*
* @Author: chenchao
* @Date: 2018-04-03 14:45:24
* @Email: chenchao3@sh.superjia.com
* @Last Modified by: chenchao
* @Last Modified time: 2018-07-03 18:02:46
*/
import JSEncrypt from 'jsencrypt'; //rsa非对称加密依赖包

/**
 * [formatInput 限制只能输入>=0的整数]
 * @param  {[type]} v [description]
 * @return {[type]}   [description]
 */
export function formatInput(v){
    return v.replace(/\D/g,'').replace(/^(0).*/,'$1');
}

/**
 * [isEmail 验证邮箱]
 * @param  {[type]}  v [description]
 * @return {Boolean}   [description]
 */
export function isEmail(v){
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(v);
}

/**
 * [isMobile 验证手机号码]
 * @param  {[type]}  v [description]
 * @return {Boolean}   [description]
 */
export function isMobile(v){
    return /^1[3456789]\d{9}$/.test(v);
}

/**
 * [isName 验证大陆姓名]
 * @param  {[type]}  v [description]
 * @return {Boolean}   [description]
 */
export function isName(v){
    return /^[\u4E00-\u9FA5a-zA-Z_]{2,20}$/.test(v);
} 

/**
 * [isIdCard 验证18位身份证]
 * @param  {[type]}  v [description]
 * @return {Boolean}   [description]
 */
export function isIdCard(v){
    return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(v);
}

/**
 * [isQQ 验证qq]
 * @param  {[type]}  v [description]
 * @return {Boolean}   [description]
 */
export function isQQ(v){
    return /^[1-9][0-9]{4,10}/.test(v);
}

/**
 * [isPhone 验证固定电话]
 * @param  {[type]}  v [description]
 * @return {Boolean}   [description]
 */
export function isFixPhone(v){
    return /^(0\d{2,3}-?)?\d{7,8}$/.test(v)
}

/**
 * [isZipCode 验证邮政编码 6位数字]
 * @param  {[type]}  v [description]
 * @return {Boolean}   [description]
 */
export function isZipCode(v){
    return /^\d{6}$/.test(v);
}

/**
 * [isWxCode 验证微信号 6至20位，以字母开头，字母，数字，减号，下划线]
 * @param  {[type]}  v [description]
 * @return {Boolean}   [description]
 */
export function isWxCode(v){
    return /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(v);
}

/**
 * [isCarCode 验证车牌号]
 * @param  {[type]}  v [description]
 * @return {Boolean}   [description]
 */
export function isCarCode(v){
    return /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/.test(v);
}

/**
 * [isDate 验证日期]
 * @param  {[string]}  v [例:'2017-11-14']
 * @return {Boolean}   [description]
 */
export function isDate(v){
    return /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/.test(v);
}


/**
 * 工具方法
 */

/**
 * 浏览器类型判断
 *
 * os.isWebkit
 * os.isIos
 * os.isAndroid
 * os.isIphone
 * os.isIpad
 * os.isIpod
 * os.isWp
 * os.isWebos
 * os.isTouchpad
 * os.isTablet
 * os.isMs
 * os.isMac
 * os.isLinux
 * os.isUnix
 * os.version
 *
 * browser.isWebkit
 * browser.isChrome
 * browser.isFirefox
 * browser.isIe
 * browser.isSafari
 * browser.isWebview
 * browser.isWechat
 * browser.isApp
 * browser.appVersion
 * browser.version
 *
 */
const detector = (function detect(ua) {
  const os = {}
  const browser = {}
  const webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/)
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/)
  const osx = !!ua.match(/\(Macintosh\; Intel /)
  const ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/)
  const iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/)
  const webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/)
  const wp = ua.match(/Windows Phone ([\d.]+)/)
  const touchpad = webos && ua.match(/TouchPad/)
  const chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/)
  const firefox = ua.match(/Firefox\/([\d.]+)/)
  const ie = ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/)
  const webview = !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/)
  const safari = webview || ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/)

  if (webkit) {
    browser.isWebkit = true
    browser.version = webkit[1]
  }
  if (android) {
    os.isAndroid = true
    os.version = android[2]
  }
  if (iphone && !ipod) {
    os.isIos = os.isIphone = true
    os.version = iphone[2].replace(/_/g, '.')
  }
  if (ipad) {
    os.isIos = os.isIpad = true
    os.version = ipad[2].replace(/_/g, '.')
  }
  if (ipod) {
    os.isIos = os.isIpod = true
    os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null
  }
  if (wp) {
    os.isWp = true
    os.version = wp[1]
  }
  if (webos) {
    os.isWebos = true
    os.version = webos[2]
  }
  if (touchpad) {
    os.isTouchpad = true
  }
  if (chrome) {
    browser.isChrome = true
    browser.version = chrome[1]
  }
  if (firefox) {
    browser.isFirefox = true
    browser.version = firefox[1]
  }
  if (ie) {
    browser.isIe = true
    browser.version = ie[1]
  }
  if (safari && (osx || os.ios)) {
    browser.isSafari = true
    if (osx) {
      browser.version = safari[1]
    }
  }
  if (webview) {
    browser.isWebview = true
  }
  if (ipad || (android && !ua.match(/Mobile/)) ||
    (firefox && ua.match(/Tablet/)) || (ie && !ua.match(/Phone/) && ua.match(/Touch/))) {
    os.isTablet = true
  }
  if (!os.tablet && !os.ipod && (android || iphone || webos ||
    (chrome && ua.match(/Android/)) || (chrome && ua.match(/CriOS\/([\d.]+)/)) ||
    (firefox && ua.match(/Mobile/)) || (ie && ua.match(/Touch/)))) {
    os.isPhone = true
  }
  if (/Iwjw/i.test(ua)) { // luyao app
    browser.isApp = true
    browser.appVersion = (ua.match(/Iwjw_iOS_([\d\.]+)/) || ua.match(/Iwjw_Android_([\d\.]+)/))[1]
  }
  if (/MicroMessenger/i.test(ua)) {
    browser.isWechat = true
  }
  if (ua.indexOf('windows') !== -1) {
    os.isMs = true
  }
  if (ua.indexOf('mac') !== -1) {
    os.isMac = true
  }
  if (ua.indexOf('linux') !== -1) {
    os.isLinux = true
  }
  if (ua.indexOf('x11') !== -1) {
    os.isUnix = true
  }

  // console.log(os, browser)
  return { os, browser }
}(navigator.userAgent))

export var os = detector.os
export var browser = detector.browser

/**
 * cookie操作
 *
 * @param {string} key - 键
 * @param {string|*} val - 值
 * @param {number} [time] - 有效时间毫秒。可选，不设置则没有过期时间
 * @return {string|null} get方法才有返回值
 */

export var cookie = {
  set(key, val, time) {
    let date = new Date()
    date.setTime(date.getTime() + time)
    document.cookie = `${key}=${val};expires=${date.toGMTString()}`
  },
  get(key) {
    const arr = document.cookie.match(new RegExp(`(^| )${key}=([^;]*)(;|$)`))
    return arr ? unescape(arr[2]) : null
  },
  delete(key) {
    if (this.get(key)) {
      this.set(key, 'x', -1)
    }
  }
}
/**
 * [genUUID 生成32位uuid]
 * @return {[string]} [32位uuid字符串]
 */
export function genUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
  //cookie.set('uuid',uuid,1000*3600*24)
};


/**
 * localStorage操作
 *
 * storage.set('a', { a: 1 })
 * storage.get('a') 返回JSON对象
 * storage.remove('a')
 */
export const storage = {
  set(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val))
    } catch (err) {
      console.log(err)
    }
  },
  get(key) {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (err) {
      return undefined
    }
  },
  remove(key) {
    localStorage.removeItem(key)
  }
}



/**
 * Simply compares two string version values.
 *
 * Example:
 * versionCompare('1.1', '1.2') => -1
 * versionCompare('1.1', '1.1') =>  0
 * versionCompare('1.2', '1.1') =>  1
 * versionCompare('2.23.3', '2.22.3') => 1
 *
 * Returns:
 * -1 = left is LOWER than right
 *  0 = they are equal
 *  1 = left is GREATER = right is LOWER
 *  And FALSE if one of input versions are not valid
 *
 * @function
 * @param {String} left  Version #1
 * @param {String} right Version #2
 * @return {Integer|Boolean}
 * @author Alexey Bass (albass)
 * @since 2011-07-1f4
 */
export function versionCompare(left, right) {
  if ((typeof left + typeof right) != 'stringstring') return false

  let a = left.split('.')
  let b = right.split('.')
  let i = 0
  let len = Math.max(a.length, b.length)

  for (; i < len; i++) {
    if ((a[i] && !b[i] && parseInt(a[i]) > 0) || (parseInt(a[i]) > parseInt(b[i]))) {
      return 1
    } else if ((b[i] && !a[i] && parseInt(b[i]) > 0) || (parseInt(a[i]) < parseInt(b[i]))) {
      return -1
    }
  }

  return 0
}

/**
 * 获取url上的query
 * @param {String} url
 * @example
 * paramOfUrl('http://192.168.1.44:2323/app/licai/tpl/protocaltpl?productId=20170721170145S70005&tpl=http%3A%2F%2Fhouse-test-water.oss.aliyuncs.com%2Fdirectwaterbucket%2Finvest%2F2017%2F5%2F16%2Fbd21776dc9784b73bbcef3618b76cb47&productType=0')
 * => { productId:"20170721170145S70005", productType: "0", tpl: "http://house-test-water.oss.aliyuncs.com/directwaterbucket/invest/2017/5/16/bd21776dc9784b73bbcef3618b76cb47" }
 * @returns {Object} params
 */
export function paramOfUrl(url) {
    url = url || window.location.href
    const paramSuit = url.substring(url.indexOf('?') + 1).split('&')
    let paramObj = {}
    for (let i = 0; i < paramSuit.length; i++) {
      const param = paramSuit[i].split('=')
      if (param.length == 2) {
          const key = decodeURIComponent(param[0])
          const val = decodeURIComponent(param[1])
          if (paramObj.hasOwnProperty(key)) {
              if (!(paramObj[key] instanceof Array)) {
              paramObj[key] = [paramObj[key]]
          }
              paramObj[key].push(val)
          } else {
              paramObj[key] = val
          }
      }
    }
    return paramObj
}

/**
 * 数值千分位格式化
 * 参数说明：
 * @param {any} num 要格式化的数字
 * @param [Number] fixed 保留几位小数，可选，默认2位
 *
 * // 使用
 * fnum(9.7) // 9.70
 * fnum(9.7, 2) // 9.70
 * fnum(12345.12345) // 12,345.12,345
 * fnum(12345.12345, 2) // 12,345.12
 */
export function fnum(num, fixed = 2) {
    return isNaN(num) ? '' : Number(num).toFixed(fixed).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,');
}

/**
 * [formatSpace 格式化出现空格,银行卡号可以使用]
 * @param  {String|Number} value    [description]
 * @param  {Number} spaceNum [description]
 * @return {String}          [description]
 * 12345555 =>  1234 5555
 */
export function formatBankcard(v, spaceNum = 4) {
    return String(v).replace(/\D/g, '').replace(new RegExp(`(\\d{${spaceNum}})(?=\\d)`,'g'), '$1 ');
}

/**
 * [隐藏手机号中间4位]
 * @param  {[String|Number]} v [description]
 * @return {[String]}   [description]
 * 13333333333 => 133****3333
 */
export function starMobile(v) {
    return String(v).replace(/\D/g, '').substr(0,11).replace(new RegExp('(\\d{3})\\d{4}(\\d{4})'),'$1****$2');
}

/**
 * [344分割手机号码]
 * @param  {[String|Number]} value [description]
 * @return {[String]}       [description]
 * 123 => 123
 * 123456 => 123 456
 * 123456789 => 123 4567 89
 */
export function formatMobile(v) {
    return (String(v).replace(/\D/g, '').substr(0,11).replace(/(\d{3})(\d{0,4})/, '$1 $2 ')).trim();

}
/**
 * [fullDate 获取完整时间 返回例子：2014年06月27日13时57分24秒]
 * @param  {[number | string]} v [description]
 * @return {[string]}   [description]
 */
export function fullDate(v) {
    const t = new Date(Number(v) || new Date().getTime());
    const year = t.getFullYear();
    const month = add0(t.getMonth()+1);
    const date = add0(t.getDate());
    const hour = add0(t.getHours());
    const minute = add0(t.getMinutes());
    const second = add0(t.getSeconds());
    return `${year}年${month}月${date}日${hour}时${minute}分${second}秒`;
}
/**
 * [add0 小于10的数字加上0]
 * @param  {[type]} num [description]
 * @return {[type]}     [description]
 */
export function add0(num = Number(num)) {
    return num >= 10 ? `${num}` : `0${num}`;
}
/**
 * [jsCrypt crypt加密] RSA非对称性加密 前端公钥加密
 * @param  {[string]} val [description]
 * @return {[string]}     [description]
 */
export function jsEncrypt(val) {
    let encrypt = new JSEncrypt();
    const publicKey =  `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtN
                        FOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76
                        xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4
                        gwQco1KRMDSmXSMkDwIDAQAB`;
    encrypt.setPublicKey(publicKey);
    return encrypt.encrypt(val);
}
/**
 * [jdDerypt crypt加密] RSA非对称性加密 后端私钥解密
 * @param  {[string]} val [description]
 * @return {[string]}     [description]
 */
export function jsDecrypt(val) {
    let decrypt = new JSEncrypt();
    const privatekey = `MIICXQIBAAKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6khyfD1Yt3YiCgQ
                        WMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76xFxdU6jE0NQ+Z+zEdhUTooNR
                        aY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB
                        AoGAfY9LpnuWK5Bs50UVep5c93SJdUi82u7yMx4iHFMc/Z2hfenfYEzu+57fI4fv
                        xTQ//5DbzRR/XKb8ulNv6+CHyPF31xk7YOBfkGI8qjLoq06V+FyBfDSwL8KbLyeH
                        m7KUZnLNQbk8yGLzB3iYKkRHlmUanQGaNMIJziWOkN+N9dECQQD0ONYRNZeuM8zd
                        8XJTSdcIX4a3gy3GGCJxOzv16XHxD03GW6UNLmfPwenKu+cdrQeaqEixrCejXdAF
                        z/7+BSMpAkEA8EaSOeP5Xr3ZrbiKzi6TGMwHMvC7HdJxaBJbVRfApFrE0/mPwmP5
                        rN7QwjrMY+0+AbXcm8mRQyQ1+IGEembsdwJBAN6az8Rv7QnD/YBvi52POIlRSSIM
                        V7SwWvSK4WSMnGb1ZBbhgdg57DXaspcwHsFV7hByQ5BvMtIduHcT14ECfcECQATe
                        aTgjFnqE/lQ22Rk0eGaYO80cc643BXVGafNfd9fcvwBMnk0iGX0XRsOozVt5Azil
                        psLBYuApa66NcVHJpCECQQDTjI2AQhFc1yRnCU/YgDnSpJVm1nASoRUnU8Jfm3Oz
                        uku7JUXcVpt08DFSceCEX9unCuMcT72rAQlLpdZir876`;
    decrypt.setPrivateKey(privatekey);
    return decrypt.decrypt(val);
}
