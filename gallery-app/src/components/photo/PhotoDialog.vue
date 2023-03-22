<template>
  <v-dialog
    :model-value="$store.getters.getDialogVisible"
    max-width="650"
    @click:outside="$store.commit('hideDialog')"
  >
    <v-card>
      <v-card-title>{{ full_title }}</v-card-title>
      <v-card-text>
        <v-img :src="$store.getters.getCurrentPhoto.url" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    full_title() {
      return `Name of photo - ${this.$store.getters.getCurrentPhoto.title}`
    }
  }
}
</script>

<style scoped></style>
