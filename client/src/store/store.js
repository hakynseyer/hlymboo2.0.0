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
      if (token) state.iniciarSesion = true
      else state.iniciarSesion = false
    },
    saveUser (state, user) {
      state.user = user
    },
    saveLang (state, lang) {
      state.lang = lang
    }
  },
  actions: {
    saveToken ({commit}, token) {
      commit('saveToken', token)
    },
    saveUser ({commit}, user) {
      commit('saveUser', user)
    },
    saveLang ({commit}, lang) {
      commit('saveLang', lang)
    }
  }
})
