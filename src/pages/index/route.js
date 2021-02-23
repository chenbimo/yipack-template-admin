// 自动导入路由（勿动）------------------------------------------------------
let R = {
    pages: [],
    views: [],
    pageImport: {},
    viewImport: {}
};
R.pageImport = require.context('@src/pages/index', true, /routePage\.js$/);
R.pageImport.keys().map((path) => {
    R.pages.push(R.pageImport(path).default || R.pageImport(path));
});
R.viewImport = require.context('@src/pages/index', true, /routeView\.js$/);
R.viewImport.keys().map((path) => {
    R.views.push(R.viewImport(path).default || R.viewImport(path));
});
// 自动导入路由（勿动）------------------------------------------------------

export default {
    path: '/',
    /**
     * layout 框架层
     * 此处采用默认的 default 框架
     * 如果默认框架不符合你的需求，请不要删除此框架层的导入
     * 直接修改 layout/default 目录下的默认框架层代码即可
     * 如果是类似官网项目，不需要框架层，也请不要将此框架层移除
     * 当做有一个全屏的框架层即可，提高需求变更的灵活性
     * 也给自己留一条退路（其实主要是框架作者的强迫症）
     * 如有问题或建议，请联系作者：chensuiyi.com
     */
    component: () => import('@src/layout/default/index.vue'),
    children: [
        {
            path: '/',
            component: () => import('@src/pages/index/index.vue'),
            children: [...R.views]
        },
        ...R.pages
    ]
};
