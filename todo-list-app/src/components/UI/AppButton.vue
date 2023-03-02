<template>
  <button class="btn"><slot></slot></button>
</template>

<script setup>
name: 'AppButton';
</script>

<style scoped>
.btn {
  padding: 10px 15px;
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
  box-shadow: 0 6px 16px 0px rgba(0, 0, 0, 0.16),
    0 4px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
