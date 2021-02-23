/**
 * 全局组件导入入口
 * 此文件，不明白请不要改动
 * 建议使用 【yipack new --comp 组件名称】 创建全局组件
 * 会默认在 comps 目录下创建组件同名目录和index.vue文件
 * 此文件会默认导入comps目录下的所有全局组件，无需手动注册
 * 如有问题或建议，请联系作者：chensuiyi.com
 */
import Vue from 'vue';
let importAll = require.context('@src/comps', true, /\.vue$/);
importAll.keys().map((path) => {
    let component = importAll(path).default || importAll(path);
    Vue.component(component.name, component);
});
