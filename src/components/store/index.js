import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 使用情况
// $store.commit('add');
// $store.dispatch('add');
// $store.state.counter

export default new Vuex.store({
    state:{
        counter:0
    },
    mutations:{
        add(state){
            state.counter++
        }
    },
    actions:{
        add({commit}){
            setTimeout(()=>{
                commit('add')
            },1000)
        }
    },
    modules:{

    }
})