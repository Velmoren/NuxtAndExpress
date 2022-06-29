export const state = () => ({
  user: {
    login: '',
    password: '',
    id: '',
    isAuth: false
  },
})

export const mutations = {
  setAuthUser(state, user) {
    state.user = user
  },
  setAuthResetUser(state) {
    state.user = {
      login: '',
      password: '',
      id: '',
      isAuth: false
    }
  },
  setAuthUserLogin(state, login) {
    state.user.login = login
  },
  setAuthUserPassword(state, password) {
    state.user.password = password
  },
  setAuthUserId(state, id) {
    state.user.id = id
  },
  setIsAuth(state, isAuth) {
    state.user.isAuth = isAuth
  },
  setAuthLogout(state) {
    state.user = {
      login: '',
      password: '',
      id: '',
      isAuth: false
    }
  }
}

export const actions = {
  setAuthUser({commit}, user) {
    commit('setAuthUser', user)
  },
  setAuthResetUser({commit}) {
    commit('setAuthResetUser')
  },
  setAuthUserLogin({commit}, login) {
    commit('setAuthUserLogin', login)
  },
  setAuthUserPassword({commit}, password) {
    commit('setAuthUserPassword', password)
  },
  setAuthUserId({commit}, id) {
    commit('setAuthUserId', id)
  },
  setIsAuth({commit}, isAuth) {
    commit('setIsAuth', isAuth)
  },
  setAuthLogout({commit}) {
    commit('setAuthLogout')
  },
}

export const getters = {
  getAuthUser(state) {
    return state.user
  },
  getAuthUserLogin(state) {
    return state.user.login
  },
  getAuthUserPassword(state) {
    return state.user.password
  },
  getAuthUserId(state) {
    return state.user.id
  },
  getIsAuth(state) {
    return state.user.isAuth
  }
}
