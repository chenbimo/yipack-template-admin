/**
 * 本地存储插件
 * 默认以 localStorage 的方式进行本地永久存储
 * 如需改变存储方式，修改以下实例配置中的 storage 为四者之一即可
 * 使用方式请查看文档：https://www.npmjs.com/package/basil.js
 * 命名空间 [namespace] 为本地存储数据时的前缀
 * 如需改动，请在 env 环境变量目录中进行修改
 * 如有问题或建议，请联系作者：chensuiyi.com
 */
import Vue from 'vue';
const Basil = require('basil.js');

let basil = new Basil({
    namespace: process.env.namespace,
    storages: ['session', 'cookie', 'local', 'memory'],
    storage: 'local'
});

// 提供给页面通过 this.$Basil 调用
Vue.prototype.$Basil = basil;

// 提供给 ajax 导入使用
export default basil;
