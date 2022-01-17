<template>
    <div>
        <PageTitle :title="title"/>
        <button @click="callChildFunc">부모 버튼</button>
        <br><br>
        <span>{{parentMsg}}</span>
        
        <!--v-bind를 사용 안하면 문자로 전달됨. -->
        <ChildComponent 
            ref="childComponent" 
            :likes="likes" :isOk="isOk" :commentIds="commentIds" :author="author"
            @send-message="getMessageFromChild"/>
    </div>
</template>
<script>
import PageTitle from '../components/PageTitle';
import ChildComponent from '../components/ChildComponent';

export default {
    name: '',
    components: {PageTitle, ChildComponent},
    data() {
        return {
            title: 'Hello World',
            likes: 23,
            isOk: false,
            commentIds: [1,5,2],
            author: {
                name: '김이나',
                company: '안테나'
            },
            parentMsg: ''
        }
    },
    computed: {
        syncMsg() {
            return ''; //this.$refs.childComponent.msg; //Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'msg') 오류 발생함.
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        callChildFunc() {
            //this.$refs.childComponent.$refs.childBtn.click(); //자식 컴포넌트 이벤트 호출
            //this.$refs.childComponent.childFunc(); //자식 컴포넌트 메소드 호출
            this.$refs.childComponent.msg = '부모가 변경한 메세지';
        },
        getMessageFromChild(msg) {
            //this.$swal(msg);
            this.parentMsg = msg;
        }
    }
}
</script>
<style scoped>
</style>