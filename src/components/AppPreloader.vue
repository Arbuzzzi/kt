<template>
	<div
		class="d-flex justify-content-center"
		v-if="processing"
	>
		<div
			class="spinner-border"
			role="status"
		>
			<span class="sr-only">Loading...</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AppPreloader',
	props: {
		processing: {
			default: false,
			type: Boolean
		}
	},
}
</script>

<style scoped>

</style>
