import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    userName: "",
    password: "",
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
