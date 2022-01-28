<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <router-link to="/login">로그인</router-link><br>
    <button @click="test">테스트</button><br>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import _axios from '@/plugins/axios.js'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted() {
    //console.log(process.env);
  },
  methods: {
    test() {
        const loginVO = {
            id: 'higis',
            password: '1111'
        }
        // const res = this.$callSyncApi2("/uat/uia/actionLoginAjax.do", "post", loginVO);
        // console.log(res);

        const response = _axios.post("/uat/uia/actionLoginAjax.do", loginVO);
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
    }
  }
}
</script>
