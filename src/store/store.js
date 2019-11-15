import Vue from 'vue'
import Vuex from 'vuex'
import general from './general'
import tasks from './tasks'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    general,
    tasks
  }
})
