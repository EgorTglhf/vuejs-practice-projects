<template>
  <select :value="modelValue" @change="changeOption" class="slct">
    <option disabled hidden value=""><slot></slot></option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :style="{ color: option.color }"
    >
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
  border: 1px solid var(--color-border);
  color: var(--color-text);
  outline: none;
  cursor: pointer;
  padding: 10px 12px;
  background-color: var(--color-background-soft);
}
</style>
