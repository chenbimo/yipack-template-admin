/**
 * 全局接口导入入口
 * 此文件，不明白请不要改动
 * 此文件会默认导入apis目录和pages目录下的所有接口文件，无需手动导入
 * 如有问题或建议，请联系作者：chensuiyi.com
 */
import Vue from 'vue';
import __path from 'path-browserify';
import __flatten from 'flat';
let apis = {};
// 请求导入
// let importRequest = require.context('@src/request', true, /\.js$/);
// importRequest.keys().map((path) => {
//     importRequest(path).default || importRequest(path);
// });
let importAll = require.context('@src/apis', true, /\.js$/);
importAll.keys().map((path) => {
    let data = importAll(path).default || importAll(path);
    apis['global.' + path.replace('./', '').replace('.js', '').replace('/', '.')] = data;
});

let importApi = require.context('@src/pages', true, /api\.js$/);
importApi.keys().map((path) => {
    let data = importApi(path).default || importApi(path);
    let route = path.replace('./', '').replace('subPages/', 'sp.').replace('subViews/', 'sv.').replace('/api.js', '').replace('/', '.');
    apis[route] = data;
});
apis = __flatten.unflatten(apis);
Vue.prototype.$Apis = apis;
