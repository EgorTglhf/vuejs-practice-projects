<template>
  <v-col cols="4">
    <v-card>
      <v-card-title>{{ photo.title }}</v-card-title>
      <v-card-text @click="openPhoto">
        <v-img :src="photo.url" width="200" height="200" />
      </v-card-text>
      <v-card-actions>
        <v-btn color="green" @click="setPrimary"
          >Primary<v-icon
            color="green"
            :style="{ visibility: photo.primary_flg ? 'visible' : 'hidden' }"
            icon="mdi-checkbox-marked-circle"
          ></v-icon
        ></v-btn>
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
    ...mapMutations(['setCurrentPhoto', 'showDialog', 'savePhotos', 'setPrimaryPhoto']),
    openPhoto() {
      this.setCurrentPhoto(this.photo)
      this.showDialog()
    },
    deletePhoto() {
      this.$store.commit('deletePhoto', this.photo)
    },
    setPrimary() {
      this.setPrimaryPhoto(this.photo)
    }
  }
}
</script>

<style lang="scss" scoped></style>
