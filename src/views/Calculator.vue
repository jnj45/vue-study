<template>
    <div>
        <h1>Calculator</h1>
        <div>
            <input type="number" v-model.number="num1" @keyup="plusNumbers"/>
            <span> + </span>
            <input type="number" v-model.number="num2" @keyup="plusNumbers"/>
            <span> = </span>
            <span>{{result}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            num1: 0,
            num2: 0,
            result: 0
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        plusNumbers() {
            this.result = this.num1 + this.num2;
        }
    }
}
</script>
<style scoped>
</style>