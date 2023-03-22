<template>
  <v-container>
    <v-row class="d-flex">
      <v-text-field label="Name of photo" density="compact" v-model="title" />
      <v-file-input label="Photo input" density="compact" v-model="img" />
      <v-btn class="ml-4" height="39" @click="addPhoto">Add</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: '',
    img: []
  }),
  methods: {
    addPhoto() {
      const reader = new FileReader()
      reader.onload = () => {
        let photo = {
          id: Date.now(),
          title: this.title,
          url: reader.result,
          primary_flg: false
        }
        this.$store.commit('addPhoto', photo)

        this.title = ''
        this.img = []
      }
      reader.readAsDataURL(this.img[0])
    }
  }
}
</script>

<style lang="scss" scoped></style>
