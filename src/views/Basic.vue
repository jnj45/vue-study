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
            Class Binding: 조건부 바인딩
        </div>
        <div class="container" v-bind:class="[activeClass, redClass]">
            Class Binding : 배열값 바인딩
        </div>
        <div v-bind:style="styleObject">
            인라인 스타일 바인딩
        </div>
        <hr>
        <label for="">리스트 렌더링 예제</label><br>
        <div>
            <select v-model="city">
                <option :key="i" :value="city.v" v-for="(city, i) in options">{{city.t}}</option>
            </select>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>제품코드</th>
                        <th>제품명</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="i" v-for="(p, i) in products">
                        <td>{{p.code}}</td>
                        <td>{{p.name}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr>
        <label for="">렌더링 문법</label><br>
        <h1 v-if="isRender">v-if는 false인 경우 element 자체가 없다.</h1>
        <h1 v-else>isRender 값이 false이면, 이 블록이 화면이 보여지게 된다.</h1>
        <h1 v-if="type=='A'">A</h1>
        <h1 v-else-if="type=='B'">B</h1>
        <h1 v-else>Other</h1>
        <h1 v-show="isShow">v-show는 element는 있지만 스타일로 안 보여지는 것.</h1>

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
            redClass: 'text-red',
            styleObject: {
                backgroundColor: 'yellow',
                color: 'red',
                fontWeight: 'bold'
            },
            options: [
                {v:'02', t:'서울'},{v:'051', t:'부산'},{v:'064', t:'제주'}
            ],
            products:[
                {code:'111',name:'키보드'},
                {code:'112',name:'마우스'}
            ],
            isRender: true,
            type: 'C',
            isShow: true
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