/**
 * 全局混入
 * 此文件尽量只添加新东西，不要删除以下配置好的东西
 * 一切皆有道理
 * 如果明白了解，请自行发挥
 * 全局混入，是为了解决 vue 组件参数复用问题
 * 不要什么都放进来，请把大部分组件共用的东西放进来
 * 如有问题或建议，请联系作者：chensuiyi.com
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.mixin({
    data() {
        return {
            ddd: 1
        };
    },
    computed: {
        ...Vuex.mapState([])
    },
    methods: {
        // 通用突变
        ...Vuex.mapMutations(['vuex_mutation']),
        // 通用动作
        ...Vuex.mapActions(['vuex_action']),
        // 公共跳转封装
        goUrl(options) {
            this.$router.push(options);
        }
    }
});
