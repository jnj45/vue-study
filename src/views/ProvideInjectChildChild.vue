<template>
    <div>
        Item Length inject: {{this.itemLength}}<br>
        Items inject: {{this.items}}
    </div>
</template>
<script>
export default {
    // props: {
    //     itemLength: {
    //         type: Number, default: 0
    //     }
    // },
    name: '',
    components: {},
    data() {
        return {
            
        }
    },
    //단점: 어떤 부모 컴포넌트에서 받아오는 것인지 추적이 힘듦.
    inject: [
        "itemLength",
        "items"
    ],
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