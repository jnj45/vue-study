<template>
    <div>
        <h1>로그인</h1>
        <span>아이디 : </span><input type="text" v-model="id"><br>
        <span>비밀번호 : </span><input type="password" v-model="password"><br>
        <button @click="login">로그인</button><button @click="logout">로그아웃</button>
        <button @click="testApi">테스트</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: '',
            password: ''
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        login() {
            const loginVO = {
                id: this.id,
                password: this.password
            }
            const res = this.$callSyncApi("/uat/uia/actionLoginAjax.do", "post", loginVO);
            console.log(res);
[]
            this.$router.push({name: 'Home'}); //페이지 이동.
        },
        logout() {
            const loginVO = {
                id: this.id,
                password: this.password
            }
            const res = this.$callApi("/uat/uia/actionLogoutAjax.do", "post", loginVO);
            console.log(res);
        },
        testApi() {
            const res = this.$callApi("/sample2/selectAuthorSampleList.do", "post", {});
            console.log(res);
        }
    }
}
</script>
<style scoped>
</style>