<template>
    <div class="layout-menu">
        <div class="menu-panel">
            <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :default-active="this.$route.path" unique-opened router>
                <!-- 角色管理 -->
                <!-- <el-submenu index="/role">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>角色管理</span>
                    </template>
                    <el-menu-item index="/role">角色列表</el-menu-item>
                </el-submenu> -->
                <!-- 教师管理 -->
                <!-- 学员管理 -->
                <!-- 信息管理 -->
                <el-submenu index="/information">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>信息管理</span>
                    </template>
                    <el-menu-item index="/information">信息列表</el-menu-item>
                </el-submenu>
                <!-- 菜单管理 -->
                <!-- <el-submenu index="/menu">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>菜单管理</span>
                    </template>
                    <el-menu-item index="/menu">菜单列表</el-menu-item>
                </el-submenu> -->
                <!-- 系统设置 -->
                <!-- <el-submenu index="/system">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>系统设置</span>
                    </template>
                    <el-menu-item index="/system">设置列表</el-menu-item>
                </el-submenu> -->
            </el-menu>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LayoutMenu',
    data() {
        return {};
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>

<style lang="scss">
.layout-menu {
    position: absolute;
    top: $layout-header-height;
    bottom: 0;
    left: 0;
    width: $layout-menu-width;
    // border-right: 1px solid $layout-menu-border-color;
    background-color: $layout-menu-background-color;
    z-index: 8;
    border-right: 1px solid #424242;
    .el-menu {
        border-right: 0;
    }
    .menu-panel {
        position: absolute;
        top: $layout-space;
        bottom: $layout-space;
        left: $layout-space;
        right: $layout-space;
        overflow: hidden;
        border-radius: $global-border-radius-width;
        .ivu-menu-light {
            height: 100%;
            width: 100%;
            border-right: 0;
            background-color: $layout-menu-background-color;
        }
    }
}
</style>
