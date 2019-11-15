<template>
  <div id="app">
    <div class="container">
      <app-header/>
      <router-view/>
      <div class="row">
        <div class="col">
          <app-pagination :total-pages="totalPages" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>
<script>
import AppHeader from './components/AppHeader';
import AppPagination from './components/AppPagination';
import {mapGetters, mapActions} from 'vuex'
export default {
  components: {AppPagination, AppHeader},
  computed: {
    ...mapGetters([
      'totalPages'
    ])
  },
  methods: {
    ...mapActions([
      'getTasks'
    ])
  },
  mounted(){
    // let page = this.$route.params.page ? this.$route.params.page - 1 : 0
    // console.log(this.$route)
    // this.getTasks({startItem: page * 10, limit: 10})
  }
}
</script>

<style lang="scss">
  a, button, input {
    &:focus {
      box-shadow: none !important;
    }
  }
</style>
