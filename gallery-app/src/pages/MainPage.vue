<template>
  <v-main>
    <v-parallax v-if="isPrimaryPhotoExists" scale="0.3" :src="urlPrimaryPhoto">
      <div
        class="d-flex flex-column fill-height justify-center align-center text-white elevation-24"
      >
        <h1 class="text-h4 font-weight-thin mb-4">Hello there!</h1>
        <h4 class="subheading">Look! I move faster than background</h4>
      </div>
    </v-parallax>
    <div v-else class="d-flex flex-column fill-height justify-center align-center elevation-24">
      <h1 class="text-h4 font-weight-thin mb-4">Hello there!</h1>
      <h4 class="subheading">
        You should select one primary photo from uploaded photos in <a href="/photo">PHOTOS</a> tab
      </h4>
    </div>
  </v-main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapGetters(['getPrimaryPhoto']),
    ...mapActions(['loadPhotos'])
  },
  mounted() {
    this.loadPhotos()
  },
  computed: {
    isPrimaryPhotoExists() {
      return this.getPrimaryPhoto() ? true : false
    },
    urlPrimaryPhoto() {
      return this.getPrimaryPhoto()?.url
    }
  }
}
</script>

<style scoped></style>
