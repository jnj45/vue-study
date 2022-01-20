<template>
    <div>
        <!-- <a id="custom-login-btn" @click="kakaoLogin()"></a>
        <img src="//k.kakaocdn.net/14/dn/btqCn0W" alt=""> -->
        <button @click="kakaoLogin()">카카오 로그인</button>
        <button @click="kakaoLogout()">카카오 로그아웃</button>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            title: 'Hello World'
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        kakaoLogin() {
            //alert('a');
            window.Kakao.Auth.login({
                scope: "profile_nickname, account_email",
                success: this.getKakaoAccount,
            });
        },
        getKakaoAccount() {
            window.Kakao.API.request({
                url: '/v2/user/me',
                success: (res) => {
                    const kakao_account = res.kakao_account;
                    const nickname = kakao_account.profile.nickname;
                    const email = kakao_account.email;

                    console.log("nickname", nickname);
                    console.log("email", email);

                    //로그인 처리 구현
                    console.log(kakao_account);

                    this.$store.commit("kakaoUser", kakao_account);

                    this.$swal('로그인 성공');
                }
            });
        },
        kakaoLogout() {
            if (!window.Kakao.Auth.getAccessToken()) {
                console.log('Not logged in.');
                return;
            }
            window.Kakao.Auth.logout(function() {
                console.log(window.Kakao.Auth.getAccessToken());
            });
        }
    }
}
</script>
<style scoped>
</style>