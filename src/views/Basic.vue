<template>
    <div>
        <h1>{{title}}</h1>
        <hr>
        <label for="">입력폼 데이타 바인딩 예제</label><br>
        <input type="text" v-model="title" /><br>
        <input type="number" v-model.number="numVal"/><br>
        <textarea v-model="textVal"></textarea><br>
        <select v-model="city">
            <option value="02">서울</option>
            <option value="051">부산</option>
            <option value="064">제주</option>
        </select><br>
        <label>
            <input type="checkbox" value="서울" v-model="checked">서울
            <input type="checkbox" value="부산" v-model="checked">부산
            <input type="checkbox" value="제주" v-model="checked">제주
        </label><br>   
        <span>
            체크한 지역: {{checked}}
        </span><br>
        <label for="">
            <input type="radio" v-bind:value="radio[0]" v-model="picked">서울
            <input type="radio" v-bind:value="radio[1]" v-model="picked">부산
            <input type="radio" v-bind:value="radio[2]" v-model="picked">제주
        </label><br>
        <span>
            선택한 지역: {{picked}}
        </span><br>
        <div v-html="htmlString"></div>
        <hr>
        <label for="">속성에 데이터 바인딩 예제</label><br>
        <img v-bind:src="imgsrc" alt="" class="logo"><br>
        <div>
            <input type="text" v-model="requiredVal">
            <button type="button" v-bind:disabled="requiredVal==''">Click</button>
        </div>
        <hr>
        <label for="">클래스와 스타일에 데이타 바인딩 예제</label><br>
        <div class="container" v-bind:class="{'active':isActive, 'text-red':isRed}">
            Class Binding: 조건바인딩
        </div>
        <div class="container" v-bind:class="[activeClass, redClass]">
            Class Binding : 배열값 바인딩
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    components: {

    },
    data() {
        return {
            title: 'Hello World2',
            htmlString: '<p style="color:red;">This is red String</p>',
            numVal: 222,
            textVal: '안녕하세요.',
            city: '064',
            checked: [],
            picked: '',
            radio1: '서울2',
            radio2: '부산2',
            radio3: '제주2',
            radio: ['서울3','부산3','제주3'],
            imgsrc: 'https://kr.vuejs.org/images/logo.png',
            requiredVal: '',
            isActive: true,
            isRed: true,
            activeClass: 'active',
            redClass: 'text-red'
        }
    },
    setup() {
        
    },
    created() {
        
    },
    mounted() {
        
    },
    unmounted() {
        
    },
    methods: {
        
    }
}
</script>
<style scoped>
.logo {
    width:50px;
    height: 50px;
}
.container {
    width: 100%;
    height: 50px;
}

.active {
    background-color: yellow;
    font-weight: bold;
}

.text-red {
    color: red;
}
</style>