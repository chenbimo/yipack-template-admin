<template>
    <div class="page-index page-full">
        {{ $t('name') }}
    </div>
</template>

<script>
import { merge as _merge } from 'lodash-es';
export default {
    name: 'Index',
    data() {
        return {
            tableData: [],
            pageData: {
                total: 0
            }
        };
    },
    created() {},
    mounted() {},
    methods: {
        goNewsSvNews1() {
            this.$router.push({
                path: '/news/sv-news-1'
            });
        },
        goNewsSpNews1() {
            this.$router.push({
                path: '/news/sp-news-1'
            });
        }
    }
};
</script>

<style lang="scss">
.page-index {
    color: #000;
    .el-menu {
        background-color: #999;
    }
}
</style>
