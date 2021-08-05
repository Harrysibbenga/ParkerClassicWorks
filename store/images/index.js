/* eslint-disable prefer-promise-reject-errors */
import { imgCol, storage } from '@/services/firebase'

export const state = () => ({
  image: {},
  images: [],
  uploadMsg: {},
})

export const mutations = {
  SET_IMAGE: (state, image) => {
    state.image = image
  },
  SET_IMAGES: (state, images) => {
    state.images = images
  },
  SET_MSG: (state, msg) => {
    state.uploadMsg = msg
  },
}

export const getters = {
  message: (state) => state.uploadMsg,
  images: (state) => state.images,
}

export const actions = {
  setImages({ commit }) {
    imgCol.orderBy('createdOn', 'desc').onSnapshot((querySnapshot) => {
      const imagesArray = []

      querySnapshot.forEach((doc) => {
        const image = doc.data()
        image.id = doc.id
        imagesArray.push(image)
      })
      commit('SET_IMAGES', imagesArray)
    })
  },
  uploadImage({ commit }, payload) {
    return new Promise((resolve, reject) => {
      const storageRef = storage.ref('images' + '/' + payload.file.name)
      const uploadTask = storageRef.put(payload.file)

      uploadTask.on(
        'state_changed',
        () => {
          // snapshot
        },
        () => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            imgCol
              .add({
                name: payload.file.name,
                createdOn: new Date(),
                url: downloadURL,
                alt: payload.alt,
              })
              .then((doc) => {
                const id = doc.id
                imgCol
                  .doc(id)
                  .get()
                  .then((doc) => {
                    const img = doc.data()
                    img.id = id
                    const uploadMsg = {
                      type: 'success',
                      message: 'Image sucssesfully uploaded to storage',
                    }
                    commit('SET_MSG', uploadMsg)
                    resolve(img)
                  })
              })
              .catch((err) => {
                const uploadMsg = {
                  type: 'warning',
                  message: err.message,
                }
                commit('SET_MSG', uploadMsg)
                reject(err)
              })
          })
        }
      )
    })
  },
  multiUpload({ commit }, payload) {
    return new Promise((resolve, reject) => {
      const storageRef = storage.ref('images/' + payload.name)
      const uploadTask = storageRef.put(payload)

      uploadTask.on(
        'state_changed',
        () => {
          // snapshot
        },
        () => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            imgCol
              .add({
                name: payload.name,
                createdOn: new Date(),
                url: downloadURL,
                alt: payload.alt,
              })
              .then((doc) => {
                const id = doc.id
                imgCol
                  .doc(id)
                  .get()
                  .then((doc) => {
                    const img = doc.data()
                    img.id = id
                    resolve(img)
                  })
              })
              .catch((err) => {
                const uploadMsg = {
                  type: 'warning',
                  message: err.message,
                }
                commit('SET_MSG', uploadMsg)
                reject()
              })
          })
        }
      )
    })
  },
}
