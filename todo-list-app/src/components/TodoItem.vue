<template>
  <div class="todo">
    <div class="todo__content">
      <div><strong>Todo:</strong> {{ todo.title }}</div>
      <div><strong>Priority:</strong> {{ todoPriorityName }}</div>
      <AppInput
        inputLabel="Completed: "
        :inputId="'checkbox_' + todo.id"
        v-model="todo.completed"
        inputType="checkbox"
      ></AppInput>
    </div>
    <div class="todo__btns">
      <AppButton @click="$emit('remove', todo)">Delete</AppButton>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
//props
const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

//computed
const todo = computed(() => {
  return props.todo;
});
const todoPriorityName = computed(() => {
  return store.state.priorityOptions.filter((option) => {
    return option.value == todo.value.priority;
  })[0]?.name;
});
</script>

<style scoped>
.todo {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.todo__content {
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
}
</style>
