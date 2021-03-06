import Vue from 'vue'

export default {
	state: {
		tasks: [
			{
				id: '',
				text: null
			}
		],
		totalPages: 0
	},
	mutations: {
		setTasks(state, payload) {
			state.tasks = payload
		},

		setTask(state, payload) {
			Vue.set(state.tasks, payload.id, {text: payload.value})
		},

		changeTask(state, payload) {
			state.tasks[payload.key].text = payload.value
		},

		removeTask(state, payload) {
			Vue.delete(state.tasks, payload)
		},
		setTotalPages(state, payload) {
			state.totalPages = payload
		}
	},
	actions: {
		getTasks({commit}, payload) {
			commit('setProcessing', true)
			let tasks = []
			let totalPages
			Vue.$db.collection('tasks')
				.orderBy('createdAt', 'desc')
				.get()
				.then((documents)=>{
					let allDocs = documents.docs
					totalPages = Math.ceil(allDocs.length / payload.limit)
					commit('setTotalPages', totalPages)
					if(payload.startItem) {
						Vue.$db.collection('tasks')
							.orderBy('createdAt', 'desc')
							.startAfter(allDocs[payload.startItem - 1])
							.limit(payload.limit ? payload.limit : 10)
							.get().then((docs)=>{

								docs.docs.forEach((doc)=>{
									let id = doc.id
									let text = doc.data().text
									tasks.push({id, text})
								})
							})
					} else {
						allDocs.forEach((doc, i)=>{
							if (i<10) {
								let id = doc.id
								let text = doc.data().text
								tasks.push({id, text})
							}

						})
					}

					commit('setTasks', tasks)
					commit('setProcessing', false)
				})
				.catch((e)=>{
					console.error(e)
					commit('setProcessing', false)
				})
		},
		addTask_() { // для массого добавления однотипных задач
			for (let i = 1; i <= 50; i++){
				setTimeout(()=>{
					Vue.$db.collection('tasks').add({
						text: 'task-' + i,
						createdAt: new Date()
					})
				},i*500)
			}
		},
		addTask({dispatch}, payload) {
			Vue.$db.collection('tasks').add({
				text: payload,
				createdAt: new Date()
			}).then(()=>{
				dispatch('getTasks', {startItem: 0, limit: 10})
			}).catch((e)=>{
				console.error(e)
			})
		},

		changeTask({commit}, payload) {
			let tasksDocRef = Vue.$db.collection('tasks').doc(payload.id)
			Vue.$db.runTransaction((transaction) => {
				return transaction.get(tasksDocRef).then((tasksDoc) => {
					if (!tasksDoc.exists) {
						throw 'Document does not exist!'
					}
					transaction.update(tasksDocRef, {text: payload.value})
				})
			})
			commit('changeTask', payload)
		},

		removeTask({commit, dispatch}, payload) {
			Vue.$db.collection('tasks')
				.doc(payload.id)
				.delete()
				.then(()=>{
					dispatch('getTasks', {startItem: payload.page * 10 - 10, limit: 10})
				}).catch((e)=>{
					console.error(e)
					commit('setProcessing', false)
				})
		}
	},
	getters: {
		tasks: state => state.tasks,
		totalPages: state => state.totalPages,
	},
}
