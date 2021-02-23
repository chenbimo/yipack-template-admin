<template>
    <div class="page-login page-full">
        <div class="form">
            <div class="title">登录TT教育管理后台</div>
            <el-form ref="form" :model="formData" label-width="80px">
                <el-form-item label="用户名">
                    <el-input v-model="formData.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="formData.password"></el-input>
                </el-form-item>
            </el-form>
            <div class="action">
                <el-button type="primary" @click="on_login">立即登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            formData: {
                username: '',
                password: ''
            }
        };
    },
    created() {},
    methods: {
        on_login() {
            this.api_login();
        },
        // 登录
        api_login() {
            return new Promise((resolve, reject) => {
                this.$Api({
                    url: '/admin/login',
                    params: {
                        username: this.formData.username,
                        password: this.formData.password
                    }
                })
                    .then((res) => {
                        this.$message({ message: res.msg, type: 'success' });
                        this.$Basil.set('token', res.data.token);
                        this.$Basil.set('loginData', res.data.loginData);
                        this.$router.replace('/');
                        resolve(res);
                    })
                    .catch((err) => {
                        console.log('err==');
                        console.log(err);
                        reject(err);
                    });
            });
        }
    }
};
</script>

<style lang="scss">
.page-login {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #5b97d6 0%, #5b88b7 100%);
    .form {
        width: 400px;
        border: 1px solid #eee;
        background-color: #fff;
        padding: 10px;
        .title {
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #ddd;
            text-align: center;
        }
        .el-form {
            margin: 20px 0;
        }
        .action {
            display: flex;
            justify-content: center;
        }
    }
}
</style>
