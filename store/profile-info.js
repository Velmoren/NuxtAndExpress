export const state = () => ({
  info: {}
})

export const mutations = {
  setInfoTableData(state, obj) {
    state.info = obj
  },
}

export const actions = {
  setInfoTableData({commit}, obj) {
    commit('setInfoTableData', obj)
  },
}

export const getters = {
  getInfoItems(state) {
    return state.info
  }
}
