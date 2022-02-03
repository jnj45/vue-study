import { createStore } from 'vuex';
import persistedstate from 'vuex-persistedstate';

const store = createStore({
    state() {
        return {
            count: 0,
            cart: [
                {product_id:1, procude_name:'아이폰 거치대'},
                {product_id:2, procude_name:'보조배터리'},
                {product_id:3, procude_name:'보조배터리2'}
            ],
            user: {},
            kakaoUser: {}
        }
    },
    plugins: [
        persistedstate({paths:['kakaoUser']})
    ],
    mutations: {
        increment(state) {
            state.count = state.count + 1;
        },
        user(state, data){
            state.user = data;
        },
        kakaoUser(state, data) {
            state.kakaoUser = data;
        }
    },
    getters: {
        cartCount: (state) => {
            return state.cart.length;
        },
        user: (state) => {
            return state.user;
        }
    }
})

export default store;
