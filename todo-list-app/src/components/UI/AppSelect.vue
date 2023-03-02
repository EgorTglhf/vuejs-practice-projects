<template>
  <select required :value="modelValue" @change="changeOption" class="slct">
    <option disabled hidden value="">
      <slot></slot>
    </option>
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
  border: 0px solid var(--color-border);
  color: var(--color-text);
  outline: none;
  cursor: pointer;
  padding: 10px 12px;
  background-color: var(--color-background-item);
  box-shadow: 0 6px 16px 0px var(--color-shadow-1),
    0 4px 20px 0 var(--color-shadow-2);
  border-radius: var(--border-radius-element);
}

select:invalid {
  color: #a9a9a9;
}
</style>
