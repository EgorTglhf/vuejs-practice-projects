import { ref, computed } from 'vue';

export function useSortedTodos(todos) {
  //reactive variables
  const selectedSort = ref('');
  //computed variables
  const sortedTodos = computed(() => {
    return [...todos.value].sort((todo1, todo2) => {
      return todo1[selectedSort.value]?.localeCompare(
        todo2[selectedSort.value]
      );
    });
  });

  return {
    selectedSort,
    sortedTodos,
  };
}
