import Vue from 'vue';
import VueI18n from 'vue-i18n';
import _path from 'path-browserify';
Vue.use(VueI18n);
/**
 * 国际化自动导入入口
 * 此文件，不明白请不要改动
 * 此文件会默认导入lang目录下的所有语言文件，无需手动注册
 * 如有问题或建议，请联系作者：chensuiyi.com
 */
let messages = {};
let importAll = require.context('@src/lang', false, /^\.\/(?!index).+\.js$/);
importAll.keys().map((path) => {
    let lang = _path.basename(path, '.js');
    messages[lang] = importAll(path).default || importAll(path);
});
let i18n = new VueI18n({
    locale: 'zh',
    messages: messages
});

export default i18n;
