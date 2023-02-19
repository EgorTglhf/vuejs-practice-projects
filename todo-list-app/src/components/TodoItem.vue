<template>
  <div class="todo">
    <div>
      <div><strong>Todo:</strong> {{ todo.title }}</div>
      <AppInput
        inputLabel="Completed: "
        :inputId="'checkbox_' + todo.id"
        v-model="todo.completed"
        inputType="checkbox"
      ></AppInput>
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
