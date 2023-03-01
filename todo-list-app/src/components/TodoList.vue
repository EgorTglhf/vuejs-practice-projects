<template>
  <div v-if="todos.length > 0">
    <h2>List of todos</h2>
    <TransitionGroup name="todo-list">
      <TodoItem
        v-for="todo in todos"
        :todo="todo"
        :key="todo.id"
        @remove="$emit('remove', todo)"
      />
    </TransitionGroup>
  </div>
  <h2 v-else>List of todos is empty</h2>
</template>

<script setup>
//imports
import TodoItem from './TodoItem.vue';

//props
const props = defineProps({
  todos: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.todo-list-enter-active,
.todo-list-leave-active {
  transition: all 0.3s ease;
}
.todo-list-enter-from,
.todo-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.todo-list-move {
  transition: transform 0.4s ease;
}
</style>
