<template>
<div class="row">
	<div class="col">
		<form @submit.prevent="submitTask($event)">
			<app-input
				@input="taskValue = $event"
				placeholder="Новая задача"
			/>
			<button
				type="submit"
				class="btn btn-success"
				:disabled="processing"
				:class="processing ? 'disabled' : ''"
			>Добавить</button>
		</form>
	</div>
</div>
</template>

<script>
import AppInput from '../components/AppInput'
import {mapGetters, mapActions} from 'vuex'

export default {
	name: 'AppHeader',
	components: {
		AppInput
	},
	computed: {
		...mapGetters([
			'processing'
		])
	},
	methods: {
		...mapActions([
			'addTask',
			'setProcessing'
		]),
		submitTask(e) {
			this.setProcessing(true)
			this.addTask(this.taskValue)
			this.$router.push('/')
			e.target.reset()
		}
	}

}
</script>

<style scoped>

</style>
