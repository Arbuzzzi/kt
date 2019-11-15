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
				class="btn btn-success">Добавить</button>
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
		])
	},
	methods: {
		...mapActions([
			'addTask'
		]),
		submitTask(e) {
			e.target.reset()
			this.$router.push('/')
			this.addTask(this.taskValue)
		}
	}

}
</script>

<style scoped>

</style>
