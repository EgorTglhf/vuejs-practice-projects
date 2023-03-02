<template>
  <button class="btn"><slot></slot></button>
</template>

<script setup>
name: 'AppButton';
</script>

<style scoped>
.btn {
  padding: var(--section-padding-1) var(--section-padding-2);
  background: none;
  background-color: var(--color-background-detail);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  cursor: pointer;
  outline: none;
  font-weight: bold;
  border-radius: var(--border-radius-element);
}

.btn:hover {
  box-shadow: 0 6px 16px 0px var(--color-shadow-1),
    0 4px 20px 0 var(--color-shadow-2);
}
</style>
