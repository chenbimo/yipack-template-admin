import Vue from 'vue';
import _default from 'vuex';
import Vuex from 'vuex';
import $Basil from '@src/plugins/basil.js';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        globalData: {
            // 侧滑面板宽度
            drawerSize: '400px'
        },
        token: $Basil.get('token') || '',
        loginData: $Basil.get('loginData') || {}
    },
    mutations: {
        /**
         * 通用全局存储方法
         * --------------------------------
         * 普通项目修改 vuex 状态方式：
         * 调用处：
         * this.$store.emit('SAVE_NAME',{name:chensuiyi})
         * 定义处：
         * SAVE_NAME(state,params){
         *     state.userinfo.name = params.name
         * }
         * --------------------------------
         * yipack 项目修改 vuex 状态方法
         * 调用处：
         * this.mutation({path:'userinfo.name',data:'chensuiyi'})
         * 定义处：
         * 无需定义，级联赋值！！！
         */
        mutation: (state, params) => {
            // 判断路径
            if (!params.path) return;
            // 判断数据
            if (!params.data) return;
            // 分割路径
            let keyPath = params.path.split('.');
            // 路径长度
            let keyLength = keyPath.length;
            // 状态别名
            let keySave = state;
            // 默认通过
            let isPass = true;
            // 循环赋值
            for (let i = 0; i < keyLength - 1; i++) {
                keySave = keySave[keyPath[i]];
                if (!keySave) {
                    isPass = false;
                    break;
                }
            }

            // 提前返回
            if (!isPass) return;
            let keyLast = keyPath[keyLength - 1];
            // 判断动作
            if (params.action) {
                if (params.action === '-') keySave[keyLast] = keySave[keyLast] - params.data;
                if (params.action === '+') keySave[keyLast] = keySave[keyLast] + params.data;
                if (params.action === '*') keySave[keyLast] = keySave[keyLast] * params.data;
                if (params.action === '/') keySave[keyLast] = keySave[keyLast] / params.data;
                return;
            } else {
                keySave[keyLast] = params.data;
            }
        }
    },
    actions: {}
});

export default store;
