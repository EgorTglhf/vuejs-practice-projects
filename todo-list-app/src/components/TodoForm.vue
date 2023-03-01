<template>
  <form @submit.prevent>
    <h4>Create todo</h4>
    <AppInput
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

//methods
function createTodo() {
  todo.value.id = Date.now();
  emit('create', todo.value);
  todo.value = {
    title: '',
    priority: '',
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
}
</style>
