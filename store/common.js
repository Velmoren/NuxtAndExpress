export const state = () => ({
  imageFromProduct: null
})

export const mutations = {
  setImageFromProduct(state, image) {
    state.imageFromProduct = image
  },
}

export const actions = {
  setImageFromProduct({commit}, image) {
    commit('setImageFromProduct', image)
  },
}

export const getters = {
  getImageFromProduct(state) {
    return state.imageFromProduct
  },
}
