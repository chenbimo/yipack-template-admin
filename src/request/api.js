import Vue from 'vue';
import axios from 'axios';
import basil from '@src/plugins/basil.js';
import qs from 'qs';
// =============================================
let request = axios.create({
    method: 'get',
    baseURL: process.env.host,
    timeout: 1000 * 60,
    withCredentials: false,
    // responseType: "json",
    // responseEncoding: 'utf8',
    // maxContentLength: 2000,
    headers: {
        // "Content-Type": "application/x-www-form-urlencoded",
        // 'Content-Type': 'application/json;utf-8'
    }
});
// 添加请求拦截器
request.interceptors.request.use(
    function (config) {
        /**
         * 请求拦截，以下仅为示例，请根据项目需求调整。
         * 在发送请求之前做些什么
         */

        // config.headers.Authorization = 'Bearer ' + yue.storage.get('token');
        // let token = basil.get('token');
        // if (token) {
        //     config.headers.Authorization = basil.get('token');
        // }

        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
request.interceptors.response.use(
    function (res) {
        return Promise.resolve(res.data);

        /**
         * 响应拦截，以下仅为示例，请根据项目需求调整。
         */

        // 令牌验证失败
        // if (res.data.ret === 401) {
        //     location.hash = "#/login";
        // }

        // if (res.data.ret === 500) {
        //     Notice.error({
        //         title: "服务器错误",
        //         desc: res.data.msg,
        //     });
        //     return Promise.reject(res.data);
        // }

        // if (res.data.msg) {
        //     Message.info({
        //         content: res.data.msg,
        //         duration: 5,
        //     });
        // }

        // 其他错误
        // return Promise.reject(res.data);
    },
    function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

// 将接口挂载到 Vue 实例，使用 this.$Api({url:'test.com'}).then(res => {}) 调用接口。
Vue.prototype.$Api = request;
export default request;
