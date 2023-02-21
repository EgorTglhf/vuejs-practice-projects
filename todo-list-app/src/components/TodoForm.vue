<template>
  <form @submit.prevent>
    <h4>Create todo</h4>
    <AppInput
      v-focus
      v-model="todo.title"
      inputType="text"
      inputPlaceholder="Name"
    />
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
  body: '',
});

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
}

.btn__form {
  align-self: flex-end;
  margin-top: 15px;
  cursor: pointer;
}
</style>
