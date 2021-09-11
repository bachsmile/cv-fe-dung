import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isActiveTextDinamic: false,
    isActiveSkillBar: false,
    isActiveLayout2: false
  },
  mutations: {
    ON_ACTIVE_TEXT_DINAMIC(state){
      state.isActiveTextDinamic = true
    },
    ON_ACTIVE_SKILLBAR(state){
      state.isActiveSkillBar = true
    },
    ON_ACTIVE_LAYOUT2(state){
      state.isActiveLayout2 = true
    }
  },
  actions: {
  },
  modules: {
  }
})
