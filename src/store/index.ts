import { createStore } from "vuex";

export default createStore({
    state(){
        return {
            count:0
        }
    },
    mutations:{
        increment(state){
            return state.count++;
        }
    },
    actions:{
        increment(context){
            context.commit('increment')
        }
    }
})