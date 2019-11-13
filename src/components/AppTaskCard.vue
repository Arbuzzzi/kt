<template>
	<div class="row">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <div
						class="card-text"
						contenteditable="true"
						@blur="blur($event)"
          >
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'AppTaskCard',
	data: () => ({
		text: null
	}),
	methods: {
		blur(e) {
			this.$emit('blur', e.target.innerText)
		}
	}
}
</script>

<style scoped>

</style>
