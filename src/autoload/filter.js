/**
 * 全局指令导入入口
 * 此文件，不明白请不要改动
 * 建议使用 【yipack new --filter 全局过滤器名称】 创建全局指令
 * 会默认在 filters 目录下创建组件同名指令目录和 index.js导入文件
 * 此文件会默认导入 filters 目录下的所有全局组件，无需手动注册
 * 如有问题或建议，请联系作者：chensuiyi.com
 */
let importAll = require.context('@src/filters', true, /index\.js$/);
importAll.keys().map((path) => {
    importAll(path).default || importAll(path);
});
