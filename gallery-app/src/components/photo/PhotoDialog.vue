<template>
  <v-dialog v-model="dialogVisible" max-width="600">
    <v-card>
      <v-card-title>{{ photo.title }}</v-card-title>
      <v-card-text>
        <v-img :src="photo.url" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    photo: {
      type: Object,
      required: true
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    dialogVisible: false
  }),
  created() {
    this.dialogVisible = this.value
  },
  watch: {
    value(newValue) {
      this.dialogVisible = newValue
    },
    dialogVisible(newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>

<style scoped></style>
