<template>
  <v-main>
    <v-container>
      <PhotoForm v-if="$store.getters.getAllPhotos.length < 11" />
      <div v-else class="mb-12">You cannot to add more photos</div>
      <v-row>
        <Photo v-for="photo in $store.getters.getAllPhotos" :photo="photo" />
      </v-row>
      <PhotoDialog />
    </v-container>
  </v-main>
</template>

<script>
import Photo from '../components/photo/Photo.vue'
import PhotoForm from '../components/photo/PhotoForm.vue'
import PhotoDialog from '../components/photo/PhotoDialog.vue'
import { mapActions } from 'vuex'

export default {
  components: { Photo, PhotoForm, PhotoDialog },
  mounted() {
    //this.fetchPhotos()
    this.loadPhotos()
  },
  methods: {
    ...mapActions(['loadPhotos']),
    openPhoto(photo) {
      this.currentPhoto = photo
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped></style>
