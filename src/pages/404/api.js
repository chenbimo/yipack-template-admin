module.exports = `
import request from '@src/request/api.js';
export default {
    // 添加
    ins(params) {
        return request({
            method: 'post',
            url: '/ins',
            params: params
        });
    },
    // 删除
    del(params) {
        return request({
            method: 'post',
            url: '/del',
            params: params
        });
    },
    // 更新
    upd(params) {
        return request({
            method: 'post',
            url: '/upd',
            params: params
        });
    },
    // 查询
    sel(params) {
        return request({
            method: 'post',
            url: '/sel',
            params: params
        });
    }
};
`;
