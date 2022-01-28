import axios from 'axios';

export default {
    // mounted() {
    //     console.log("mixin mounted! mixin mounted가 먼저 호출됨.");
    // },
    // unmounted() {
        
    // },
    created() {
        // console.log('api2.js created!');
        // axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        // axios.defaults.baseURL = 'http://localhost';
    },
    methods: {
        async $callApi2(url, method, data) {
            // return (
            //     await axios({
            //         method: method,
            //         url: url, //process.env.VUE_APP_API_SERVER_URL +
            //         data: data
            //     }).catch(e => {
            //         console.log(e);
            //     })
            // ).data;
            await axios({
                method: method,
                url: url,
                data: data
            })
            .then((res)  => {
                return res.data;
            })
            .catch(e => {
                console.log(e);
            })
        },
        $callSyncApi2(url, method, data) {
            axios({
                method: method,
                url: url, //process.env.VUE_APP_API_SERVER_URL +
                data: data
            })
            .then((res)  => {
                console.log('axios then===================================');
                console.log(res.data);
                return res.data;
            })
            .catch(e => {
                console.log(e);
            })
        }
    } 
}