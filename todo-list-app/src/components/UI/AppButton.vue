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
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
  outline: none;
}
</style>
