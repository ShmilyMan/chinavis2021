import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "@/store/mutations"
import actions from "@/store/actions"
import modules from "@/store/modules"
import getters from "@/store/getters"

Vue.use(Vuex)

const state = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  getters
})
