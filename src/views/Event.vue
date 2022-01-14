<template>
    <div>
        <button @click="increaseCounter">Add 1 (v-on: = @)</button>
        <p>The count is : {{counter}}</p>
        <button @click="one(), two()">multi method</button><br>
        <select v-model="city" @change="changeSelect">
            <option value="02">서울</option>
            <option value="051">부산</option>
            <option value="064">제주</option>
        </select><br>
        <input type="text" @keyup.enter="showValue" v-model="textValue">
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            counter: 0,
            city: '',
            textValue: ''
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        increaseCounter() {
            this.counter += 1;
        },
        one() {
            alert('one');
        },
        two() {
            alert('two');
        },
        changeSelect() {
            alert(this.city);
        },
        showValue() {
            alert(this.textValue);
        }
    }
}
</script>
<style scoped>
</style>