export const state = () => ({
  title: 'КТО МЫ?',
  description: 'Компания Стандарт Контакт реализует метизную продукцию в Минске. У нас представлен широкий ассортимент крепежных изделий, мы предлагаем купить метизы оптом в любых объемах'
})

export const mutations = {
  // setContacts(state, data) {
  //   state.contacts = data
  // },
}

export const actions = {
  // setContacts({commit}, data) {
  //   commit('setContacts', data)
  // }
}

export const getters = {
  getDescription(state) {
    return state.description
  },
  getTitle(state) {
    return state.title
  }
}
