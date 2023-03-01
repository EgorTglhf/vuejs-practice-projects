import { ref, computed } from 'vue';

export function useSortedAndSearchedTodos(sortedTodos) {
  //reactive variables
  const searchQuery = ref('');
  //computed variables
  const sortedAndSearchedTodos = computed(() => {
    return sortedTodos.value.filter((todo) =>
      todo.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  return {
    searchQuery,
    sortedAndSearchedTodos,
  };
}
