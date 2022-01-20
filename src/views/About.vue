<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div>
    <span>카카오 사용자 : {{this.user}}</span>
  </div>

</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.kakaoUser;
    }
  },
  mounted() {
    console.log(this.user);
  }
}
</script>
