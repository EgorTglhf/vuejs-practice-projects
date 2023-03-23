<template>
  <v-main>
    <v-parallax v-if="isPrimaryPhotoExists" scale="0.3" :src="urlPrimaryPhoto">
      <div class="shadow d-flex flex-column justify-center align-center text-white">
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

<style scoped>
.shadow {
  width: 50%;
  margin: 30% auto;
}
.shadow::before {
  position: absolute;
  margin: 30% auto;
  -moz-border-radius: 200px;
  border-radius: 200px;
  width: 300px;
  height: 300px;
  content: '';
  z-index: -1;

  background: linear-gradient(
    -45deg,
    rgba(236, 30, 30, 0.8) 10%,
    rgba(36, 211, 182, 0.8) 35%,
    rgba(191, 30, 236, 0.8) 60%,
    rgba(211, 176, 36, 0.8) 90%
  );
  filter: blur(20px);
  background-size: 400% 400%;
  animation: gradient 15s linear infinite, spin 4s linear infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
