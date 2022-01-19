<template>
    <div>
        <h1>Calculator 3</h1>
        <div>
            <input type="number" v-model.number="num1"/>
            <span> + </span>
            <input type="number" v-model.number="num2"/>
            <span> = </span>
            <span>{{result}}</span>
        </div>
    </div>
</template>
<script>
import {reactive, computed, toRefs} from 'vue'; //toRefs 추가

function plusNumbers() {
    let state = reactive({
        num1: 0,
        num2: 0,
        result: computed(() => state.num1 + state.num2)
    });
    return toRefs(state); //반응형으로 선언된 것들을 외부 function으로
}
export default {
    name: '',
    setup() {
        let {num1, num2, result} = plusNumbers(); //외부 function
        return { 
            num1, num2, result
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