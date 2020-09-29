import Vue from 'vue'
import Vuex from 'vuex'
import { COUNT_INCREMENT } from './mutation-types'

Vue.use(Vuex);

export default new Vuex.Store({
    strict:true,
    state:{
      count:0,
      studentList:[],
    },
    getters:{
      doubleCount(state){
        return state.count*2;
      },
      studentLength:state => state.studentList.length,
      // studentSmall(state){
      //   return state.studentList.filter(student => student.age < 18);
      // }
      studentSmall:state => state.studentList.filter(student => student.age < 18),
    },
    mutations:{
      [COUNT_INCREMENT](state,payload){
        state.count = state.count + payload.num;
      }
    },
    // actions:{
    //   countIncrement(context,payload){

    //   }
    // }
  });
