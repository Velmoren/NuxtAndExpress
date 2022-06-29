import {getUrlImage} from 'assets/js/helpers'

export const state = () => ({
  products: [],
  searchInput: ''
})

export const mutations = {
  setSearchList(state, data) {
    //перерабатываем data в удобоваримый формат для дальнейшего использования в проекте
    const arraySearchProducts = transformSearchArray(data['ListOfTypes'])
    state.products = arraySearchProducts.length !== 0 ? arraySearchProducts.map(item => {
      return {
        name: item['STANDARTNAME'],
        category: item.typeName,
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
  setSearchInputValue(state, val) {
    state.searchInput = val
  },
  resetSearchInputValue(state) {
    state.searchInput = ''
  }
}

export const actions = {
  setSearchList({commit}, data) {
    commit('setSearchList', data)
  },
  setSearchInputValue({commit}, val) {
    commit('setSearchInputValue', val)
  },
  resetSearchInputValue({commit}) {
    commit('resetSearchInputValue')
  }
}

export const getters = {
  getSearchList(state) {
    return state.products
  },
  getSearchInputValue(state) {
    return state.searchInput
  }
}

function transformSearchArray(arr) {
  return arr.map((item) => {
    if (item['Category_id'] === "c90c4463-394a-11e9-9fa8-00155d0e072e") {
      item.typeName = "screws";
    } else if (item['Category_id'] === "bd35f5e8-394a-11e9-9fa8-00155d0e072e") {
      item.typeName = "bolts";
    } else if (item['Category_id'] === "ac55ae62-394a-11e9-9fa8-00155d0e072e") {
      item.typeName = "anchors";
    } else if (item['Category_id'] === "2dd5ff8b-394b-11e9-9fa8-00155d0e072e") {
      item.typeName = "nuts";
    } else if (item['Category_id'] === "dbe38c4a-394a-11e9-9fa8-00155d0e072e") {
      item.typeName = "wares";
    } else if (item['Category_id'] === "06d29a2a-394b-11e9-9fa8-00155d0e072e") {
      item.typeName = "other_bolts";
    } else if (item['Category_id'] === "66784aac-577c-11e7-bc71-c4e98402e535") {
      item.typeName = "other_wares";
    } else if (item['Category_id'] === "912fc794-394a-11e9-9fa8-00155d0e072e") {
      item.typeName = "washers";
    } else if (item['Category_id'] === "145ad2fc-394b-11e9-9fa8-00155d0e072e") {
      item.typeName = "elements";
    } else {
      item.typeName = "others_wares";
    }

    return item;
  });
}
