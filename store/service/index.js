import { serviceCol } from '@/services/firebase'

export const state = () => ({
  allPosts: [],
  post: null,
})

export const mutations = {
  setPosts(state, val) {
    if (val) {
      state.allPosts = val
    } else {
      state.allPosts = []
    }
  },
  setPost(state, val) {
    if (val) {
      state.post = val
    } else {
      state.post = null
    }
  },
  clearPost(state) {
    state.post = null
  },
}

export const actions = {
  setPost({ commit }, type) {
    return new Promise((resolve) => {
      serviceCol
        .where('type', '==', type)
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            const post = doc.data()
            post.id = doc.id
            commit('setPost', post)
            resolve(post)
          })
        })
        .catch(function (error) {
          console.log('Error getting documents: ', error)
        })
    })
  },
  setPosts({ commit }) {
    serviceCol.onSnapshot((querySnapshot) => {
      const postsArray = []

      querySnapshot.forEach((doc) => {
        const post = doc.data()
        post.id = doc.id
        postsArray.push(post)
      })
      commit('setPosts', postsArray)
    })
  },
}

export const getters = {
  getPost(state) {
    return state.post
  },
  getPosts(state) {
    return state.allPosts
  },
}
