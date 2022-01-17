<template>
    <div style="background-color:yellow">
        <div>
            likes: {{likes}}
        </div>
        <div>
            isOk: {{isOk}}
        </div>
        <div>
            commentIds: {{commentIds}}
        </div>
        <div>
            author: 이름={{author.name}}, 회사={{author.company}}
        </div>
        <button @click="childFunc" ref="childBtn">자식 버튼</button><br>
        <span>{{msg}}</span>
        <br><br>
        <button @click="sendParent">부모에게 메세지 전달</button>
        <br><br>
        <button @click="changeData">자식 데이타 변경 동기화</button>
    </div>
</template>
<script>
export default {
    props: {
        likes: {
            type: Number,
            default: 0
        },
        isOk: {
            type: Boolean,
            default: false
        },
        commentIds: [],
        author: {
            type: Object
        }
    },
    name: '',
    components: {},
    data() {
        return {
            msg: '자식에 있던 메세지',
            sendMsg: '자식이 보내는 메세지'
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        childFunc() {
            this.$swal('childFunc called!');
        },
        sendParent() {
            this.$emit('send-message', this.sendMsg);
        },
        changeData() {
            this.msg = '자식 데이타 변경됨.';
        }
    }
}
</script>
<style scoped>
</style>