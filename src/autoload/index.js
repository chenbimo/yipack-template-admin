/**
 * 插件导入入口文件
 * 为了解决，什么 element-ui iview 等等框架和第三方库
 * 一股脑地把导入和配置写到 main.js 里面，特意设定此入口
 * 如需新增插件，请在 plugins 目录下，创建一个新的文件
 * 所有和插件相关的配置和导入等，都相互隔离开
 * 提高项目的可维护性，可扩展性，给下一任接手的人，一个期待
 * 如有问题或建议，请联系作者：chensuiyi.com
 */

// 自动导入插件（勿动）
// =====================================================
let importAll = require.context('@src/autoload', true, /^\.\/(?!index).+\.js$/);
importAll.keys().map((path) => {
    importAll(path).default || importAll(path);
});
// =====================================================
