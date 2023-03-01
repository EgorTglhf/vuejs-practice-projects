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
  color: var(--color-text);
  border: 1px solid var(--color-border);
  cursor: pointer;
  outline: none;
}
</style>
