import { careerCol } from '@/services/firebase'

export const state = () => ({
  career: {},
})

export const mutations = {
  setContent(state, val) {
    state.career = val
  },
}

export const actions = {
  setContent({ commit }) {
    careerCol.onSnapshot((querySnapshot) => {
      const contentArray = []

      querySnapshot.forEach((doc) => {
        const content = doc.data()
        content.id = doc.id
        contentArray.push(content)
      })
      commit('setContent', contentArray[0])
    })
  },
}

export const getters = {
  getContent(state) {
    return state.career
  },
}
