/**
 * 此文件为路由核心入口文件
 * 一般情况下，不需要动此文件
 * 此文件将会自动加载当前项目 pages 目录下的所有路由
 * 如有问题或建议，请联系作者：chensuiyi.com
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

// 处理路由重复导航问题
let originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};
Vue.use(VueRouter);

let routeList = [];
let importAll = require.context('@src/pages', true, /route\.js$/);
importAll.keys().map((path) => {
    let router = importAll(path).default || importAll(path);
    routeList.push(router);
});

// 导入自动生成的路由文件
let router = new VueRouter({
    routes: routeList
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
    // 此处写全局前置守卫逻辑
    if (to.matched.length === 0) {
        next('/404');
    } else {
        next();
    }
});

// 全局后置守卫
router.afterEach((to, from) => {
    // 此处写全局后置守卫逻辑
});

export default router;
