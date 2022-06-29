import {getUrlImage} from 'assets/js/helpers'

export const state = () => ({
  products: [],
  item: ''
})

export const mutations = {
  setProductList(state, data) {
    //перерабатываем data в удобоваримый формат для дальнейшего использования в проекте
    state.products = data['ListOfTypes'].length !== 0 ? data['ListOfTypes'][0]['StdList'].map(item => {
      return {
        name: item['STANDARTNAME'],
        id: item['STANDARTID'],
        standard: {type: item.Properties.TYPE, value: item.Properties['VALUE']},
        analogs: item.Properties['ANALOG'].map(analog => ({type: analog.TYPE, value: analog['VALUE']})),
        files: {
          image: {
            url: item.Files['Pictures'].length !== 0 ? getUrlImage(item.Files['Pictures'][0]['FilePath']) : null,
            name: item.Files['Pictures'].length !== 0 ? item.Files['Pictures'][0].Name : '',
            type: item.Files['Pictures'].length !== 0 ? item.Files['Pictures'][0].Type : '',
          }
        }

      }
    }) : []
  },
  setItem(state, item) {
    state.item = item
  }
}

export const actions = {
  setProductList({commit}, data) {
    commit('setProductList', data)
  },
  setItem({commit}, item) {
    commit('setItem', item)
  }
}

export const getters = {
  getProductList(state) {
    return state.products
  },
  getItem(state) {
     return state.item
  }
}
