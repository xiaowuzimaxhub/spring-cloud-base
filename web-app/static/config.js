/*
 在主入口文件中加入：
 Vue.prototype.$http.defaults.baseURL=window.serverconf.xxx
 指定axios的头域名
 修改此文件后无需打包
 2018-04-17
 */

window.serverconf = {
  appId: 'test',
  appSecret: 'test',
  production: {
    baseUrl: 'http://112.74.60.248:8080/demo',
    authUrl: 'http://112.74.60.248:18001/auth',
    baseURL: 'http://112.74.60.248:18000'
  },
  development: {
    baseUrl: 'http://127.0.0.1:8080',
    authUrl: 'http://192.168.99.100:18001/auth',
    baseURL: 'http://192.168.99.100:18000'
  }
}
