<template>
  <div class="dialog" v-show="show" @click.stop="hideDialog">
    <div class="dialog__content" @click.stop><slot></slot></div>
  </div>
</template>

<script setup>
name: 'AppDialog';

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:show']);

function hideDialog() {
  emit('update:show', false);
}
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  z-index: 10;
}
.dialog__content {
  margin: auto;
  background: var(--color-background-soft);
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>
