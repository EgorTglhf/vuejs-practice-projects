import axios from 'axios';
import { ref, onMounted } from 'vue';

export function useTodos() {
  const TODOS_URL = new URL(
    'https://jsonplaceholder.typicode.com/todos?_limit=5'
  );

  const todos = ref([]);
  const isTodosLoading = ref(true);

  const fetching = async () => {
    try {
      isTodosLoading.value = true;
      const response = await axios.get(TODOS_URL);
      todos.value = response.data;
    } catch (error) {
      alert('Could not fetch todos');
    } finally {
      isTodosLoading.value = false;
    }
  };

  const loadTodos = () => {
    const todosArr = localStorage.getItem('todos');
    todos.value = JSON.parse(todosArr) || [];
    isTodosLoading.value = false;
  };

  onMounted(loadTodos);

  return {
    todos,
    isTodosLoading,
  };
}
