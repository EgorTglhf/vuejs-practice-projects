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
//import axios from 'axios';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';
import { ref, onMounted, computed, watch } from 'vue';

//variables
const TODOS_URL = new URL(
  'https://jsonplaceholder.typicode.com/todos?_limit=5'
);

//reactive variables
const todos = ref([]);
const dialogVisible = ref(false);
const isTodosLoading = ref(false);
const selectedSort = ref('');
const sortOptions = ref([
  { value: 'title', name: 'Sort on name' },
  { value: 'priority', name: 'Sort on priority' },
]);
const searchQuery = ref('');
const isHideCompleted = ref(true);

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

async function loadTodos() {
  const todosArr = localStorage.getItem('todos');
  todos.value = JSON.parse(todosArr) || [];
  // try {
  //   isTodosLoading.value = true;
  //   const response = await axios.get(TODOS_URL);
  //   todos.value = response.data;
  // } catch (error) {
  //   alert('Could not fetch todos');
  // } finally {
  //   isTodosLoading.value = false;
  // }
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

//hooks
onMounted(() => {
  loadTodos();
});

//computed variables
const buttonShowHideName = computed(() => {
  return (isHideCompleted.value ? 'Show' : 'Hide') + ' completed';
});

const sortedTodos = computed(() => {
  return [...todos.value].sort((todo1, todo2) => {
    return todo1[selectedSort.value]?.localeCompare(todo2[selectedSort.value]);
  });
});

const sortedAndSearchedTodos = computed(() => {
  return sortedTodos.value.filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
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
