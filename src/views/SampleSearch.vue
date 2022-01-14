<template>
    <div>
        <div>
            <select v-model="city">
                <option v-for="(city, i) in cities" :value="city.code" :key="i">{{city.name}}</option>                
            </select>
            <input type="text" v-model="userName" @keyup.enter="searchUserList">
            <button @click="searchUserList">조회</button>
        </div>
        <div>
            <table>
                <thead>
                    <th>이름</th>
                    <th>나이</th>
                    <th>직업</th>
                </thead>
                <tbody>
                    <tr v-for="(user, i) in userList" :key="i">
                        <td>{{user.name}}</td>
                        <td>{{user.age}}</td>
                        <td>{{user.job}}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: '',
    components: {},
    data() {
        return {
            cities: [{code:'02',name:'서울'},{code:'051',name:'부산'},{code:'064',name:'제주'}],
            city: '02',
            userName: '',
            userList: []
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        async searchUserList() {
            const params = {
                selectedCity: this.selectedCity,
                userName: this.userName
            }
            console.log(params);

            this.userList = await this.api('https://ca2cf65a-ebd5-4efc-a0c4-55baeaf6d52c.mock.pstmn.io/userList','get', params);
            // this.userList = [
            //     {name:'유재석2', age: 50, job:'연예인'},
            //     {name:'하하2', age: 45, job:'연예인'},
            //     {name:'김종국2', age: 48, job:'연예인,가수'}
            // ];
            console.log(this.userList);
        },
        async api(url, method, data) {
            return (
                await axios({
                    method: method,
                    url: url,
                    data: data
                }).catch(e => {
                    console.log(e);
                })
            ).data;
        }
    }
}
</script>
<style scoped>
</style>