<template>
    <div class="layout-header">
        <div class="left">YiPack通用管理后台</div>
        <div class="center flex-center"></div>
        <div class="right">
            <div class="avatar" :style="{ backgroundImage: 'url(' + require('@src/assets/images/favicon.png') + ')' }"></div>
            <div class="nickname">{{ loginData.nickname || loginData.username }}</div>
            <div class="exit" @click="on_exit">
                <div class="box"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LayoutHeader',
    created() {},
    methods: {
        on_exit() {
            this.$Basil.reset();
            this.$router.replace('/login');
        }
    }
};
</script>

<style lang="scss">
.layout-header {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: $layout-header-height;
    background-color: $layout-header-background-color;
    box-shadow: 0px 3px 6px #1f1e1e;
    z-index: 9;
    padding: 0 10px;

    .left {
        display: flex;
        align-items: center;
        font-size: 18px;
        flex: 0 0 $layout-header-height;
        padding: 5px;
        word-break: keep-all;
        white-space: nowrap;
        color: #fff;
    }
    .center {
        flex: 1 1 100%;
        font-size: 18px;
    }
    .right {
        display: flex;
        align-items: center;
        color: #fff;
        flex: 0 0 $layout-header-height;
        .avatar {
            height: $layout-header-height - 20px;
            width: $layout-header-height - 20px;
            border-radius: 6px;
            margin-right: 10px;
        }
        .nickname {
            margin-right: 10px;
        }
        .exit {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f1f0f0;
            height: 24px;
            width: 24px;
            border: 2px solid #5aaaff;
            cursor: pointer;
            border-radius: 50%;
            .box {
                height: 6px;
                width: 6px;
                border-radius: 50%;
                background-color: #e86666;
            }
        }
    }
}
</style>
