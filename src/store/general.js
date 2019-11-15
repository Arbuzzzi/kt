export default {
	state: {
		processing: false,
	},
	mutations: {
		setProcessing(state, payload) {
			state.processing = payload
		}
	},
	actions: {
		setProcessing({commit}, payload) {
			commit('setProcessing', payload)
		}
	},
	getters: {
		processing: state => state.processing
	},
}
