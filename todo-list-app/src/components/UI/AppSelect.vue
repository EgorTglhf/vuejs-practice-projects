<template>
  <select :value="modelValue" @change="changeOption" class="slct">
    <option disabled value="">Choose from lists</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script setup>
name: 'AppSelect';

const emit = defineEmits(['update:modelValue']);

//props
const props = defineProps({
  modelValue: {
    type: String,
  },
  options: {
    type: Array,
    default: () => [],
  },
});

//methods
function changeOption(event) {
  emit('update:modelValue', event.target.value);
}
</script>

<style scoped>
.slct {
  border: 1px solid teal;
  outline: none;
  cursor: pointer;
}
</style>
