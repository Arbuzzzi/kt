<!--suppress JSUnresolvedVariable-->
<template>
	<div class="row">
    <div class="col">
      <div
				v-if="!processing"
				class="card"
			>
        <div class="card-body p-3">
          <div class="card-text">
						<p class="mb-0 d-flex justify-content-between">
							<span
								class="p-1"
								contenteditable="true"
								@blur="blur($event)"
							>
								<slot></slot>
							</span>

							<slot name="removeCard"></slot>
						</p>
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
	props: {
		processing: {
			default: false,
			type: Boolean
		}
	},
	methods: {
		blur(e) {
			this.$emit('blur', e.target.innerText)
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
