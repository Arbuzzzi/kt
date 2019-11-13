<template>
  <div class="container">
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
    <app-task-card
      class="mt-3"
      @blur="changeTask({id: key, value: $event})"
      v-for="(task, key) of tasks"
      :key="key"
    >{{ task.text }} </app-task-card>
  </div>
</template>

<script>

import AppInput from '../components/AppInput'
import AppTaskCard from '../components/AppTaskCard'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'home',
  components: {
    AppTaskCard,
    AppInput
  },
  data: () => ({
    taskValue: null
  }),
  computed: {
    ...mapGetters([
      'tasks'
    ])
  },
  methods: {
    ...mapActions([
      'addTask',
      'changeTask'
    ]),
    submitTask(e) {
      e.target.reset()
      this.addTask(this.taskValue)
    }
  }
}
</script>
