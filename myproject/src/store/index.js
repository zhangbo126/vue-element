import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    num: 0,
    arr: [1, 32, 5, 23, 2, 4, 2, 34, 3],
    time: [
      { name: 'zhang2', age: 332 },
      { name: 'zhang3', age: 222 },
      { name: 'zhang4', age: 43 },
      { name: 'zhang5', age: 43 },
      { name: 'zhang1', age: 234 }
    ],
    msg: 'hellow vue',
    title: 'this is rote2 Title'
  },
  mutations: {
    increment(state, obj) {
      state.num += obj.age
      state.title = obj.name
    },
    setnum(state, obj) {
      state.num += obj.sex
    }
  },

  actions: {
    setnum(context, obj) {
      context.commit('setnum', obj)
    },
    arr(state) {
      return state.arr
    }
  },

  getters: {
    arr(state) {
      return state.arr.filter(v => v > 5)
    },
    time(state) {
      return state.time
    },
    msg(state) {
      return state.msg
    },
    num(state) {
      return state.num
    },
    timeName(state) {
      let resout = state.time.map((v, i) => {
        return v.name
      })
      return resout
    },

    timeAge(state) {
      let resout = state.time.map((v, i) => {
        return v.age
      })
      return resout
    },
    arr(state) {
      return state.arr
    }

  },



})

export default store
