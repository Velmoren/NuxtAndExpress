import {getUrlImage} from 'assets/js/helpers'

export const state = () => ({
  notFoundGoods: false,
  goods: [],
  goodsSettings: {},
  countPageOptions: [
    {id: 0, value: 10},
    {id: 1, value: 20},
    {id: 2, value: 30},
    {id: 3, value: 50},
    {id: 4, value: 100},
  ],
  currentPage: 1,
  countPage: 10,
  totalPages: 1,
  paginationArray: [],
})

export const mutations = {
  setGood(state, goods) {
    //перерабатываем data в удобоваримый формат для дальнейшего использования в проекте
    state.goodsSettings = {
      name: goods['StdList']['STANDARTNAME'],
      id: goods['StdList']['STANDARTID'],
      standard: {type: goods['StdList'].Properties.TYPE, value: goods['StdList'].Properties['VALUE']},
      analogs: goods['StdList'].Properties['ANALOG'].map(analog => ({type: analog.TYPE, value: analog['VALUE']})),
      files: {
        image: goods['StdList'].Files['Pictures'].length !== 0 ? {
          url:  getUrlImage(goods['StdList'].Files['Pictures'][0]['FilePath']),
          name: goods['StdList'].Files['Pictures'][0].Name,
          type: goods['StdList'].Files['Pictures'][0].Type,
        } : null,
        schema: goods['StdList'].Files['Schemes'].length !== 0 ? {
          url:  getUrlImage(goods['StdList'].Files['Schemes'][0]['FilePath']),
          name: goods['StdList'].Files['Schemes'][0].Name,
          type: goods['StdList'].Files['Schemes'][0].Type,
        } : null,
        table: goods['StdList'].Files['Tables'].length !== 0 ? {
          url: getUrlImage(goods['StdList'].Files['Tables'][0]['FilePath']),
          name: goods['StdList'].Files['Tables'][0].Name,
          type: goods['StdList'].Files['Tables'][0].Type,
        } : null,
        other: goods['StdList'].Files['Other'].length !== 0 ? goods['StdList'].Files['Other'].map(item => {
          return {
            url: getUrlImage(item['FilePath']),
            name: item.Name,
            type: item.Type,
          }
        }) : [],
        otherTables: goods['StdList'].Files['Other'].length !== 0 ? goods['StdList'].Files['Other'].map(item => {
          return {
            url: getUrlImage(item['FilePath']),
            name: item.Name,
            type: item.Type,
          }
        }).filter(item => item.type === 'Таблица') : [],
      }
    }

    //высчитываем количество страниц
    state.totalPages = Math.ceil(goods['totalsize'] / state.countPage)
    state.goods = goods.list
    state.notFoundGoods = false
  },
  setNotFoundGoods(state) {
    state.totalPages = 1
    state.goods = []
    state.notFoundGoods = true
  },
  changeCurrentPage(state, pageNumber) {
    state.currentPage = pageNumber
  },
  nextPage(state) {
    state.currentPage++
  },
  prevPage(state) {
    state.currentPage--
  },
  setCountPage(state, val) {
    state.countPage = val
  },
  resetCurrentPage(state) {
    state.currentPage = 1
  },
  resetCountPage(state) {
    state.countPage = 10
  }
}

export const actions = {
  setGood({commit}, goods) {
    commit('setGood', goods)
  },
  setNotFoundGoods({commit}) {
    commit('setNotFoundGoods')
  },
  changeCurrentPage({commit}, pageNumber) {
    commit('changeCurrentPage', pageNumber)
  },
  setCountPage({commit}, val) {
    commit('setCountPage', val)
  },
  nextPage({commit}) {
    commit('nextPage')
  },
  prevPage({commit}) {
    commit('prevPage')
  },
  resetCurrentPage({commit}) {
    //метод, обнуляющий номер страницы
    commit('resetCurrentPage')
  },
  resetCountPage({commit}) {
    //метод, обнуляющий количество выводимых элементов
    commit('resetCountPage')
  },
  resetPagination({commit}) {
    commit('resetCurrentPage')
    commit('resetCountPage')
  }
}

export const getters = {
  getGoods(state) {
    return state.goods
  },
  getNotFoundGoods(state) {
    return state.notFoundGoods
  },
  getCurrentPage(state) {
    return state.currentPage
  },
  getTotalPage(state) {
    return state.totalPages
  },
  getCountPage(state) {
    return state.countPage
  },
  getCountPageOptions(state) {
    return state.countPageOptions
  },
  getCheckedGoodLogo(state) {
    return state.goodsSettings.files.image
  },
  getCheckedGoodSchema(state) {
    return state.goodsSettings.files.schema
  },
  getCheckedGoodTable(state) {
    return state.goodsSettings.files.table
  },
  getCheckedGoodStandard(state) {
    return state.goodsSettings.standard
  },
  getCheckedGoodAnalogs(state) {
    return state.goodsSettings.analogs
  },
}
