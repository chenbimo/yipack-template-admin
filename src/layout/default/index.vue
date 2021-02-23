<template>
    <div class="layout-default">
        <LayoutHeader></LayoutHeader>
        <LayoutMenu></LayoutMenu>
        <div class="layout-container">
            <div class="layout-main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import LayoutHeader from './header.vue';
import LayoutMenu from './menu.vue';
export default {
    name: 'LayoutDefault',
    components: {
        LayoutHeader,
        LayoutMenu
    }
};
</script>

<style lang="scss">
.layout-default {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-x: hidden;
    .layout-container {
        position: absolute;
        left: $layout-menu-width;
        right: 0;
        bottom: 0;
        top: $layout-header-height;
        border-radius: $global-border-radius-width;
        z-index: 7;
    }
    .layout-main {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto auto;
        padding: $layout-space;
        background-color: $layout-main-background-color;
    }
}
</style>
