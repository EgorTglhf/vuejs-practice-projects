<template>
  <select :value="modelValue" @change="changeOption" class="slct__btn">
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
name: 'AppSelectButton';

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
.slct__btn {
  padding: 10px 15px;
  background: none;
  background-color: var(--color-background-detail);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  cursor: pointer;
  outline: none;
  font-weight: bold;
}

.slct__btn:hover {
  box-shadow: 0 6px 16px 0px rgba(0, 0, 0, 0.16),
    0 4px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
