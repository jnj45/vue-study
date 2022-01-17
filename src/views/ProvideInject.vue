<template>
    <div>
        <ProvideInjectChild /> <!--:itemLength="items.length"-->
    </div>
</template>
<script>
import ProvideInjectChild from './ProvideInjectChild';
export default {
    name: '',
    components: {ProvideInjectChild},
    data() {
        return {
            items: ['a','b']
        }
    },
    provide() {
        return {
            itemLength: this.items.length,
            items: this.items
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
    }
}
</script>
<style scoped>
</style>