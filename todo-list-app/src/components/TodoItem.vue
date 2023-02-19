<template>
  <div class="todo">
    <div>
      <div><strong>Todo:</strong> {{ todo.title }}</div>
      <div>
        <strong>Completed: </strong>
        <AppInput
          v-model:modelValue="todo.completed"
          inputType="checkbox"
        ></AppInput>
      </div>
    </div>
    <div class="todo__btns">
      <AppButton @click="$emit('remove', todo)">Delete</AppButton>
    </div>
  </div>
</template>

<script setup>
//props
const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.todo {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
