<template>
    <div>
        <h1>Calculator 4</h1>
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
import {plusNumbers} from '../util.js';

export default {
    name: '',
    //setup이 실행될 때, 컴포넌트 인스턴스가 아직 생성되지않아 setup옵션 내에 this가 존재하지 않습니다. 즉, props를 제외하고, 컴포넌트 내 다른 속성에 접근할 수 없습니다 – local state, computed properties 또는 methods.
    //setup 옵션은 나중에 언급할 props 와 context에 접근하는 펑션이어야합니다. 또한, setup에서 반환된 모든 것은 컴포넌트의 템플릿뿐만 아니라 나머지 컴포넌트 (computed properties, methods, 라이프사이클 훅 등)에 노출됩니다.
    setup(props, context) {
        console.log(props);
        console.log(context.attrs);
        console.log(context.slots);
        console.log(context.emit);

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