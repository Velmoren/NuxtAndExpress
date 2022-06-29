export const state = () => ({
  mobileMenuActive: false,
  lockedBody: false,
  profileLoading: false
})

export const mutations = {
  setChangeActiveMobileMenu(state) {
    state.mobileMenuActive = ! state.mobileMenuActive
  },
  // setChangeLockedBody(state, locker) {
  //   state.lockedBody ?  locker.unlock(document.body) : locker.lock(document.body)
  //   state.lockedBody = !state.lockedBody
  // },
  setDeActiveMobileMenu(state) {
    state.mobileMenuActive = false
  },
  setProfileLoading(state, bool) {
    state.profileLoading = bool
  },
}

export const actions = {
  setChangeActiveMobileMenu({commit}) {
    commit('setChangeActiveMobileMenu')
  },
  setChangeLockedBody({commit}, locker) {
    commit('setChangeLockedBody', locker)
  },
  setDeActiveMobileMenu({commit}) {
    commit('setDeActiveMobileMenu')
  },
  setProfileLoading({commit}, bool) {
    commit('setProfileLoading',bool)
  },
}

export const getters = {
  getMobileMenuActive(state) {
    return state.mobileMenuActive
  },
  getProfileLoading(state) {
    return state.profileLoading
  },
}
