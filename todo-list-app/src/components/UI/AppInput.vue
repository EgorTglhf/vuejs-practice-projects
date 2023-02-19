<template>
  <input
    :type="inputType"
    :value="modelValue"
    @input="updateInput"
    class="input"
  />
</template>

<script setup>
name: 'AppInput';

const emit = defineEmits(['update:modelValue']);

//props
const props = defineProps({
  inputType: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number],
  },
});

//methods
function updateInput(event) {
  emit('update:modelValue', event.target.value);
}
</script>

<style scoped>
.input {
  margin-top: 15px;
  border: 1px solid teal;
  padding: 10px 15px;
  outline-color: teal;
}
</style>
