<template>
  <v-col cols="4">
    <v-card>
      <v-card-title>{{ photo.title }}</v-card-title>
      <v-card-text @click="openPhoto">
        <v-img :src="photo.url" width="200" height="200" />
      </v-card-text>
      <v-card-actions>
        <v-btn color="green"><v-icon icon="mdi-checkbox-marked-circle"></v-icon>Primary</v-btn>
        <v-btn class="ml-auto" color="red" @click="deletePhoto"
          ><v-icon icon="mdi-cancel"></v-icon
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    photo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations(['setCurrentPhoto', 'showDialog']),
    openPhoto() {
      this.setCurrentPhoto(this.photo)
      this.showDialog()
    },
    deletePhoto() {
      this.$store.commit('deletePhoto', this.photo)
    }
  }
}
</script>

<style lang="scss" scoped></style>
