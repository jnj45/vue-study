<template>
    <div>
        <ProvideInjectChildChild /><!--:itemLength="this.itemLength"-->
    </div>
</template>
<script>
import ProvideInjectChildChild from './ProvideInjectChildChild';

export default {
    /*props: {
        itemLength: {
            type: Number, default: 0
        }
    },*/
    name: '',
    components: {ProvideInjectChildChild},
    data() {
        return {
            
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