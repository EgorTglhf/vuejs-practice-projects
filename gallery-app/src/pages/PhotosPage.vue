<template>
  <v-main>
    <v-container>
      <PhotoForm @addPhoto="addPhoto" />
      <v-row>
        <Photo v-for="photo in photos" :photo="photo" />
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Photo from '../components/photo/Photo.vue'
import PhotoForm from '../components/photo/PhotoForm.vue'
import axios from 'axios'
import { toHandlers } from 'vue'

export default {
  components: { Photo, PhotoForm },
  data: () => ({
    photos: []
  }),
  mounted() {
    this.fetchPhoto()
  },
  methods: {
    fetchPhoto() {
      axios
        .get('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then((response) => (this.photos = response.data))
    },
    addPhoto(photo) {
      this.photos.push(photo)
    }
  }
}
</script>

<style scoped></style>
