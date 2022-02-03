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
        async login() {
            const loginVO = {
                id: this.id,
                password: this.password
            }
            const response = await this.$axios.post("/uat/uia/actionLoginAjax.do", loginVO);
            console.log(response);

            const loginUser = response.data.fields.user;
            this.$store.commit("user", loginUser);

            this.$router.push({name: 'Home'}); //페이지 이동.
        },
        logout() {
            const loginVO = {
                id: this.id,
                password: this.password
            }
            const res = this.$axios.post("/uat/uia/actionLogoutAjax.do", loginVO);
            console.log(res);
        },
        testApi() {
            const res = this.$axios.post("/sample2/selectAuthorSampleList.do", {});
            console.log(res);
        }
    }
}
</script>
<style scoped>
</style>