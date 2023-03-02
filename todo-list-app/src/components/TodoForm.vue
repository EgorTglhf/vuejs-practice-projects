<template>
  <form @submit.prevent>
    <h4>Create todo</h4>
    <AppInput
      required
      v-focus
      v-model="todo.title"
      inputType="text"
      inputPlaceholder="Todo..."
    />
    <AppSelect v-model="todo.priority" :options="priorityOptions"
      >Priority</AppSelect
    >
    <AppButton class="btn__form" @click="createTodo">Create</AppButton>
  </form>
</template>

<script setup>
//imports
import { ref, defineEmits, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const emit = defineEmits(['create']);

//reactive variables
const todo = ref({
  title: '',
  priority: '',
  completed: false,
});

//computed
const priorityOptions = computed(() => {
  return store.state.priorityOptions;
});
const isEmptyFields = computed(() => {
  return {
    title: !todo.value.title,
    priority: !todo.value.priority,
  };
});

//methods
function createTodo() {
  if (!checkTodoFields()) return;

  todo.value.id = Date.now();
  emit('create', todo.value);
  todo.value = {
    title: '',
    priority: '',
  };
}

function checkTodoFields() {
  let isOk = true;
  for (const field in isEmptyFields.value) {
    if (isEmptyFields.value[field]) {
      isOk = false;
    }
  }
  return isOk;
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  grid-gap: var(--section-gap);
}

.btn__form {
  align-self: flex-end;
}
</style>
