import axios from 'axios';

export default {
    // mounted() {
    //     console.log("mixin mounted! mixin mounted가 먼저 호출됨.");
    // },
    // unmounted() {
        
    // },
    methods: {
        async $callApi(url, method, data) {
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