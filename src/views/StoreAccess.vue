<template>
    <div>
        <h2>Count: {{count}}</h2>
        <button @click="increment">증가</button>
        <span>Cart Count : {{cartCount}}</span>
    </div>
</template>
<script>
export default {
    computed: {
        count() {
            return this.$store.state.count;
        },
        cartCount() {
            return this.$store.getters.cartCount;
        }
    },
    methods: {
        increment() {
            this.$store.commit("increment");
        }
    }
}
</script>
<style scoped>
</style>