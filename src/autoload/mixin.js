/**
 * 混入导入入口文件
 * 如需新增插件，请在 mixins 目录下，创建一个新的js文件
 * 如有问题或建议，请联系作者：chensuiyi.com
 */

// 自动导入插件（勿动）
// =====================================================
let importAll = require.context('@src/mixins', true, /\.js$/);
importAll.keys().map((path) => {
    importAll(path).default || importAll(path);
});
// =====================================================
