<template>
    <div>
        <input type="text" v-model="userInfo.name">
        <input type="text" v-model.number="userInfo.age">
        <input type="text" v-model="userInfo.job">
        <button @click="saveUser">저장</button>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            userInfo: {
                name: '',
                age: 0,
                job: ''
            }
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        saveUser() {
            const r = this.saveData(this.userInfo);
            if (r == 'S'){
                this.$swal('저장하였습니다.');
            }else{
                this.$swal('실패하였습니다.');
            }
        },
        saveData(userInfo) {
            console.log(userInfo);
            const r = 'S';
            return r;
        }
    }
}
</script>
<style scoped>
</style>