<!--suppress JSUnresolvedVariable -->
<template>
	<div class="form-group">
		<label :for="id ? id : uid">{{ label }}</label>
    <!--suppress HtmlFormInputWithoutLabel -->
		<input
			:type="type"
			class="form-control"
			:id="id ? id : uid"
			:placeholder="placeholder"
			:value="value"
			@input="input($event)"
    >
	</div>
</template>

<script>
export default {
	name: 'AppInput',
	data: () => ({
		uid: null,
		val: null
	}),
	props: {
		placeholder: {
			default: '',
			type: String
		},
		id: {
			default: '',
			type: String
		},
		type: {
			default: 'text',
			type: String
		},
		label: {
			default: '',
			type: String
		},
		value: {
			default: '',
			type: String
		}
	},
	methods: {
		input(e) {
			this.$emit('input', e.target.value)
		}
	},
	mounted () {
		this.uid = `app-input-${this._uid}`
	}
}
</script>

<style scoped>

</style>
