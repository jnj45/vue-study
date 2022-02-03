<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <router-link to="/login">로그인</router-link><br>
    <button @click="test">테스트</button><br>
    <button @click="test2">테스트2</button><br>
    <span>로그인 ID: {{user.id}}, 사용자명: {{user.name}}</span>
    <HelloWorld msg="Welcome to HIPP"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import _axios from '@/plugins/axios.js'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted() {
    //console.log(process.env);
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    test() {
        const loginVO = {
            id: 'higis',
            password: '1111'
        }
        // const res = this.$callSyncApi2("/uat/uia/actionLoginAjax.do", "post", loginVO);
        // console.log(res);

        const response = this.$axios.post("/uat/uia/actionLoginAjax.do", loginVO);
        response
        .then((res) => {
          console.log('then =====================================================');
          console.log(res);
        })
        .catch(e => {
          console.log('catch =====================================================');  
          console.log(e);
        });

        console.log('here =====================================================');
        console.log(response);
    },
    async test2() {
        const loginVO = {
            id: 'higis',
            password: '1111'
        }
        try{

          const response = await this.$axios.post("/uat/uia/actionLoginAjax.do", loginVO);
        
          console.log('logged in =====================================================');
          console.log(response);
          const loginUser = response.data.fields.user;
          this.$store.commit("user", loginUser);

        }catch(error){
          console.log('try catch error!! =====================================================');
          console.log(error);
        } 
    }
  }
}
</script>
