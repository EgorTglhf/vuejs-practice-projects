import { ref, computed } from 'vue';

export function useSortedAndSearchedAndHidedTodos(sortedAndSearchedTodos) {
  //reactive variables
  const isHideCompleted = ref(true);
  //computed variables
  const sortedAndSearchedAndHidedTodos = computed(() => {
    return isHideCompleted.value
      ? sortedAndSearchedTodos.value.filter((todo) => todo.completed !== true)
      : sortedAndSearchedTodos.value;
  });

  return {
    isHideCompleted,
    sortedAndSearchedAndHidedTodos,
  };
}
