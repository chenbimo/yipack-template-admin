<template>
    <div class="layout-footer"></div>
</template>

<script>
export default {
    name: "LayoutFooter",
};
</script>

<style lang="scss">
.layout-footer {
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 0 10px;
    height: $layout-footer-height;
    border-top: 1px solid $layout-footer-border-color;
    background-color: $layout-footer-background-color;
    .box {
        flex: 0 0 33.33333%;
        border-right: 1px solid #f7f7f7;
        &:last-of-type {
            border-right: 0;
        }
        .img {
            height: 26px;
            color: #000000;
            font-size: 18px;
            text-align: center;
        }
        .txt {
            height: $layout-footer-height - 30px;
            line-height: $layout-footer-height - 30px;
            text-align: center;
        }
    }
}
</style>
