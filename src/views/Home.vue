<!--suppress JSUnresolvedVariable-->
<template>
  <div>
    <app-preloader :processing="processing"/>
    <div v-show="!processing">
      <app-task-card
        class="mt-3"
        v-for="(task, i) of tasks"
        :key="task.id"
        @blur="changeTask({id: task.id, value: $event, key: i})"
      >{{ task.text }}
        <template v-slot:removeCard>
          <span
            class="p-1"
            @click="removeTask({id: task.id, page: pageCurrent})">
            <font-awesome-icon
              class="icon-close"
              icon="times"
            />
          </span>
        </template>
      </app-task-card>
    </div>
  </div>
</template>

<script>

import AppTaskCard from '../components/AppTaskCard'
import {mapGetters, mapActions} from 'vuex'
import AppPreloader from '../components/AppPreloader';

export default {
  name: 'home',
  components: {
    AppPreloader,
    AppTaskCard
  },

  data: () => ({
    taskValue: null,
    page: 1
  }),
  computed: {
    ...mapGetters([
      'tasks',
      'processing'
    ]),
    pageCurrent() {
      return this.$route.params.page ? parseInt(this.$route.params.page) : 1
    }
  },
  methods: {
    ...mapActions([
      'changeTask',
      'getTasks',
      'removeTask'
    ])
  },
  watch: {
    '$route' (to) {
      let limit = 10
      let page = to.params.page ? to.params.page - 1 : 0
      this.getTasks({startItem: page * limit, limit})
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon-close {
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: red;
    }
  }
</style>
