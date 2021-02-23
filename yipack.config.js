// 插件参数配置，用于控制
module.exports = {
    /**
     * 描述：是否开启手机自适应模式
     * 默认值：false
     */
    px2viewport: {
        enable: false
    },
    providePlugin: {
        _: 'lodash',
        path: 'path-browserify'
    },
    // 开发配置
    devServer: {
        proxy: {
            '/api1': {
                target: 'http://8.135.21.205:8886',
                pathRewrite: { '^/api1': '' }
            }
        }
    },
    // eslint实例化参数
    eslint: {}
};
