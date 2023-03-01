<template>
  <div class="app">
    <AppInput
      v-model="searchQuery"
      inputPlaceholder="Search..."
      inputType="text"
      v-focus
    ></AppInput>
    <div class="app__btns">
      <AppButton @click="showDialog">New Todo</AppButton>
      <div class="app__btns__right">
        <AppButton @click="toggleIsHideCompleted">{{
          buttonShowHideName
        }}</AppButton>
        <AppSelect v-model="selectedSort" :options="sortOptions"
          >Choose type of sort</AppSelect
        >
      </div>
    </div>

    <AppDialog v-model:show="dialogVisible">
      <TodoForm @create="createTodo" />
    </AppDialog>
    <TodoList
      :todos="sortedAndSearchedAndHidedTodos"
      @remove="removeTodo"
      v-if="!isTodosLoading"
    />
    <div v-else>Loading...</div>
  </div>
</template>

<script setup>
//imports
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';
import { useTodos } from './hooks/useTodos';
import { useSortedTodos } from './hooks/useSortedTodos';
import { useSortedAndSearchedTodos } from './hooks/useSortedAndSearchedTodos';
import { ref, computed, watch } from 'vue';

//reactive variables
const dialogVisible = ref(false);
const sortOptions = ref([
  { value: 'title', name: 'Sort on name' },
  { value: 'priority', name: 'Sort on priority' },
]);
const isHideCompleted = ref(true);

//variables from modules
const { todos, isTodosLoading } = useTodos();
const { selectedSort, sortedTodos } = useSortedTodos(todos);
const { searchQuery, sortedAndSearchedTodos } =
  useSortedAndSearchedTodos(sortedTodos);

//methods
function showDialog() {
  dialogVisible.value = true;
}

function hideDialog() {
  dialogVisible.value = false;
}

function createTodo(todo) {
  todos.value.push(todo);
  hideDialog();
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t.id !== todo.id);
}

function toggleIsHideCompleted() {
  isHideCompleted.value = !isHideCompleted.value;
}

//watchers
watch(
  todos,
  (todosNew) => {
    localStorage.setItem('todos', JSON.stringify(todosNew));
  },
  { deep: true }
);

//computed variables
const buttonShowHideName = computed(() => {
  return (isHideCompleted.value ? 'Show' : 'Hide') + ' completed';
});

const sortedAndSearchedAndHidedTodos = computed(() => {
  return isHideCompleted.value
    ? sortedAndSearchedTodos.value.filter((todo) => todo.completed !== true)
    : sortedAndSearchedTodos.value;
});
</script>

<style scoped>
.app {
  padding: 20px;
}

.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.app__btns__right {
  display: flex;
  gap: 15px;
}
</style>
