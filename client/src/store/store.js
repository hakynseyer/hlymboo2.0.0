import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
    hyzher: null,
    token: null,
    login: false,
    lang: 'es'
  },
  mutations: {
    saveToken (state, token) {
      state.token = token
      if (token) state.login = true
      else state.login = false
    },
    saveHyzher (state, hyzher) {
      state.hyzher = hyzher
    },
    saveLang (state, lang) {
      state.lang = lang
    }
  },
  actions: {
    saveToken ({commit}, token) {
      commit('saveToken', token)
    },
    saveHyzher ({commit}, hyzher) {
      commit('saveHyzher', hyzher)
    },
    saveLang ({commit}, lang) {
      commit('saveLang', lang)
    }
  }
})
