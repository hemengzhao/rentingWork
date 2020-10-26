import { createStore } from 'vuex'

interface state {
  count: any
}

export default createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state: state) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  }
})
