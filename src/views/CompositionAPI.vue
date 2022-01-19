<template>
    <div>
        <h1>Calculator 1</h1>
        <div>
            <input type="number" v-model.number="state.num1" @keyup="plusNumbers"/>
            <span> + </span>
            <input type="number" v-model.number="state.num2" @keyup="plusNumbers"/>
            <span> = </span>
            <span>{{state.result}}</span>
        </div>
    </div>
</template>
<script>
import {reactive} from 'vue';

export default {
    name: '',
    components: {},
    data() {
        return {
        }
    },
    setup() {
        let state = reactive({ //reactive를 이용해서 실시간 변경사항 탐지
            num1: 0,
            num2: 0,
            result: 0
        });

        function plusNumbers() {
            this.state.result = this.state.num1 + this.state.num2;
        }

        return { //reactive로 선언된 걸 반환.
            state,
            plusNumbers
        };
    },
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        
    }
}
</script>
<style scoped>
</style>