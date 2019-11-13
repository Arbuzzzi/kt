import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: {
      'id_uniq': {
        id: 'id_uniq',
        text: 'text'
      }
    }
  },
  mutations: {
    setTasks(state, payload) {
      state.tasks = payload
    },
    setTask(state, payload) {
      Vue.set(state.tasks, 'test', {text: payload})
    },
    changeTask(state, payload) {
      state.tasks[payload.id].text = payload.value
    }
  },
  actions: {
    getTasks({commit}, payload) {
      commit('setTasks', payload)
    },
    addTask({commit}, payload) {
      commit('setTask', payload)
    },
    changeTask({commit}, payload) {
      commit('changeTask', payload)
    }
  },
  getters: {
    tasks: state => state.tasks
  },
  modules: {
  }
})
