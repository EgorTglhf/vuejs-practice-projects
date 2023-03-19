<template>
  <v-main>
    <v-container>
      <PhotoForm v-if="photos.length < 11" @addPhoto="addPhoto" />
      <div v-else>You cannot add more photos</div>
      <v-row>
        <Photo v-for="photo in $store.getters.getAllPhotos" :photo="photo" @openPhoto="openPhoto" />
      </v-row>
      <PhotoDialog :photo="currentPhoto" v-model="dialogVisible" />
    </v-container>
  </v-main>
</template>

<script>
import Photo from '../components/photo/Photo.vue'
import PhotoForm from '../components/photo/PhotoForm.vue'
import PhotoDialog from '../components/photo/PhotoDialog.vue'
import { toHandlers } from 'vue'

export default {
  components: { Photo, PhotoForm, PhotoDialog },
  data: () => ({
    photos: [],
    currentPhoto: {},
    dialogVisible: false
  }),
  mounted() {
    this.$store.dispatch('fetchPhotos')
  },
  methods: {
    addPhoto(photo) {
      this.photos.push(photo)
    },
    openPhoto(photo) {
      this.currentPhoto = photo
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped></style>
