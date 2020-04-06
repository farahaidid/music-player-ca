import Vue from 'vue'
import Vuex from 'vuex'

// Persisted State
import createPersistedState from "vuex-persistedstate"

// Using vuex
Vue.use(Vuex)

// Modules
import AUTH from "../store/modules/auth.store"
import FILES from "../store/modules/files.store"

export default new Vuex.Store({
   plugins: [createPersistedState()],
   modules: {
      AUTH, FILES
   }
})
