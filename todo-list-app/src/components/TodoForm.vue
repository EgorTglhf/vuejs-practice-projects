<template>
  <form @submit.prevent>
    <h4>Create todo</h4>
    <AppInput
      v-focus
      v-model="todo.title"
      inputType="text"
      inputPlaceholder="Todo..."
    />
    <AppSelect v-model="todo.priority" :options="priorityOptions"></AppSelect>
    <AppButton class="btn__form" @click="createTodo">Create</AppButton>
  </form>
</template>

<script setup>
//imports
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['create']);

//reactive variables
const todo = ref({
  title: '',
  priority: '',
});
const priorityOptions = ref([
  { value: 3, name: 'ASAP', color: 'red' },
  { value: 2, name: 'Important', color: 'blue' },
  { value: 1, name: 'Normal', color: 'green' },
]);

//methods
function createTodo() {
  todo.value.id = Date.now();
  emit('create', todo.value);
  todo.value = {
    title: '',
    body: '',
  };
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
}

.btn__form {
  align-self: flex-end;
  /* margin-top: 15px; */
}
</style>
