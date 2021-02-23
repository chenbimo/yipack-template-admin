<template>
    <div class="page-404 page-full">
        <div class="text">404</div>
        <router-link to="/" class="link">页面不见了，点此返回首页...</router-link>
    </div>
</template>

<script>
export default {
    name: 'NotFound404'
};
</script>

<style lang="scss">
.page-404 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .text {
        font-size: 50px;
    }
    .link {
        margin: 20px 0;
        color: #378de6;
    }
}
</style>
