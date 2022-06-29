export const state = () => ({
  contacts: {},
})

export const mutations = {
  setContacts(state, data) {
    state.contacts = data
  },
}

export const actions = {
  setContacts({commit}, data) {
    commit('setContacts', data)
  }
}

export const getters = {
  getContacts(state) {
    return state.contacts
  }
}
