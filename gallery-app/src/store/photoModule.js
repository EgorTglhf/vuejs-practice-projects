import axios from 'axios'

export default {
  state: {
    photos: [],
    dialogVisible: false,
    currentPhoto: {}
  },
  mutations: {
    setPhotos(state, payload) {
      state.photos = payload
    },
    showDialog(state) {
      state.dialogVisible = true
    },
    hideDialog(state) {
      state.dialogVisible = false
    },
    setCurrentPhoto(state, payload) {
      state.currentPhoto = payload
    },
    addPhoto(state, payload) {
      state.photos.push(payload)
      this.commit('savePhotos')
    },
    deletePhoto(state, payload) {
      state.photos = state.photos.filter((photo) => photo.id !== payload.id)
      this.commit('savePhotos', state)
    },
    savePhotos(state) {
      localStorage.setItem('photos', JSON.stringify(state.photos))
    }
  },
  getters: {
    getAllPhotos(state) {
      return state.photos
    },
    getDialogVisible: (state) => state.dialogVisible,
    getCurrentPhoto: (state) => state.currentPhoto
  },
  actions: {
    fetchPhotos(context) {
      axios
        .get('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then((response) => context.commit('setPhotos', response.data))
    },
    loadPhotos(context) {
      const photoJSON = localStorage.getItem('photos')
      context.commit('setPhotos', JSON.parse(photoJSON) || [])
    }
  }
}
