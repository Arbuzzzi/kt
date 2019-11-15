export default {
	state: {
		processing: false,
	},
	mutations: {
		setProcessing(state, payload) {
			state.processing = payload
		}
	},
	getters: {
		processing: state => state.processing
	},
}
