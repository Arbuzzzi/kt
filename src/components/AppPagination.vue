<template>
<nav class="mt-3">
  <ul class="pagination justify-content-center">
    <li
			class="page-item"
			:class="pageCurrent - 1 <= 0 ? 'disabled' : ''"
		>
			<router-link
				class="page-link"
				:to="`/page/${pageCurrent - 1}`"
			>
				<span aria-hidden="true">&laquo;</span>
			</router-link>
		</li>
    <li
			class="page-item"
			v-for="page of pages"
			:key="`page-${page}`"
			:class="getClass(page)"
		>
			<router-link
				class="page-link"
				:to="`/page/${page}`"
			>{{ page }}</router-link>
		</li>
    <li
			class="page-item"
			:class="totalPages === pageCurrent ? 'disabled' : ''"
		>
			<router-link
				class="page-link"
				:to="`/page/${pageCurrent + 1}`"
			>
				<span aria-hidden="true">&raquo;</span>
			</router-link>
		</li>
  </ul>
</nav>
</template>

<script>
import pagination from '../plugins/pagination';
export default {
	name: 'AppPagination',
	props: {
		totalPages: {
			default: 0,
			type: Number
		}
	},
	computed: {
		pages() {
			let pages = []
			let total = this.totalPages
			for (let i = 0; i < total; i++){
				pages.push(pagination(i, total))
			}
			return pages[this.pageCurrent - 1]
		},
		pageCurrent() {
			return this.$route.params.page ? parseInt(this.$route.params.page) : 1
		}
	},
	methods: {
		getClass(page) {
			let returnedClass = ''
			if (page === this.pageCurrent) {
				returnedClass = 'active'
			}
			if (page === '...') {
				returnedClass = 'disabled'
			}
			return returnedClass
		}
	}
}

</script>

<style lang="scss" scoped>

</style>
