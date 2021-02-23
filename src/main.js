/**
 * 此文件为应用核心入口文件
 * 一般情况下，不需要动此文件
 * 如果需要添加第三方模块
 * 请到plugins目录下操作
 */
// 核心库
import Vue from 'vue';
// 全局路由
import router from '@src/router/index.js';
// 全局存储
import vuex from '@src/vuex/index.js';
// 国际化
import i18n from '@src/lang/index.js';
// 插件导入
import '@src/plugins/index.js';
// 异步请求
import '@src/request/index.js';
// 全局混入
import '@src/mixin/index.js';
// 全局组件
import '@src/comps/index.js';
// 全局样式
import '@src/styles/index.scss';
// 应用模板
import App from '@src/App.vue';
// 实例化
let vm = new Vue({
    router: router,
    store: vuex,
    i18n: i18n,
    render: (h) => h(App)
}).$mount('#app');
