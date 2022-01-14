<template>
    <div>
        <label>{{getFullName()}} : method방식은 매번 동일 연산.</label><br>
        <label>{{fullName}} : computed방식</label><br>

        fName : <input type="text" v-model="fName">, lName : <input type="text" v-model="lName">
        <hr>

        <input type="number" v-model.number="x1">
        <input type="number" v-model.number="x2">
        <input type="number" v-model.number="y">
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            fName: '재석',
            lName: '유',
            x1: 0,
            x2: 0,
            y: 0
        }
    },
    computed: {
        fullName() {
            return this.fName + ' ' + this.lName;
        }
    },
    watch: {
        x1(){
            this.y = this.x1 + this.x2;
        },
        x2(){
            this.y = this.x1 + this.x2;
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        getFullName() {
            return this.fName + ' ' + this.lName;
        }
    }
}
</script>
<style scoped>
</style>