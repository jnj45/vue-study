import {reactive, computed, toRefs} from 'vue'; //toRefs 추가

const plusNumbers = () => {
    let state = reactive({
        num1: 0,
        num2: 0,
        result: computed(() => state.num1 + state.num2)
    });
    return toRefs(state);
}

export {
    plusNumbers
}