import {getUrlImage} from 'assets/js/helpers'

export const state = () => ({
  filters: {
    mat: {
      values: [],
      checked: ''
    },
    cov: {
      values: [],
      checked: ''
    },
    form: {
      values: [],
      checked: ''
    },
    dimA: {
      values: [],
      checked: ''
    },
    dimB: {
      values: [],
      checked: ''
    },
    dimC: {
      values: [],
      checked: ''
    },
    price: []
  }
})

export const mutations = {
  setFilterList(state, data) {
    data['Filters'].forEach(filter => {
      if (filter.mat) {
        if(filter.mat[0] !== '') {
          state.filters.mat.values = filter.mat.map(item => ({value: item, text: item, checked: false}))
        } else {
          state.filters.mat.values = []
        }
        state.filters.mat.values.unshift({value: '', text: 'Материал (все)', checked: true})
      } else if (filter.cov) {
        if(filter.cov[0] !== '') {
          state.filters.cov.values = filter.cov.map(item => ({value: item, text: item, checked: false}))
        } else {
          state.filters.cov.values = []
        }
        state.filters.cov.values.unshift({value: '', text: 'Покрытие (все)', checked: true})
      } else if (filter.form) {
        if(filter.form[0] !== '') {
          state.filters.form.values = filter.form.map(item => ({value: item, text: item, checked: false}))
        } else {
          state.filters.form.values = []
        }
        state.filters.form.values.unshift({value: '', text: 'Форма (все)', checked: true})
      } else if (filter.dimA) {
        if(filter.dimA[0] !== '') {
          state.filters.dimA.values = filter.dimA.map(item => ({value: item, text: item, checked: false}))
        } else {
          state.filters.dimA.values = []
        }
        state.filters.dimA.values.unshift({value: '', text: 'Диаметр (все)', checked: true})
      } else if (filter.dimB) {
        if(filter.dimB[0] !== '') {
          state.filters.dimB.values = filter.dimB.map(item => ({value: item, text: item, checked: false}))
        } else {
          state.filters.dimB.values = []
        }
        state.filters.dimB.values.unshift({value: '', text: 'Длина (все)', checked: true})
      } else if (filter.dimC) {
        if(filter.dimC[0] !== '') {
          state.filters.dimC.values = filter.dimC.map(item => ({value: item, text: item, checked: false}))
        } else {
          state.filters.dimC.values = []
        }
        state.filters.dimC.values.unshift({value: '', text: 'Диаметр (все)', checked: true})
      } else if (filter.price) {

      }
    })
  },
  setFilterDimA(state, val) {
    state.filters.dimA.checked = val
  },
  setFilterDimB(state, val) {
    state.filters.dimB.checked = val
  },
  setFilterMat(state, val) {
    state.filters.mat.checked = val
  },
  setFilterCov(state, val) {
    state.filters.cov.checked = val
  }
}

export const actions = {
  setFilterList({commit}, data) {
    commit('setFilterList', data)
  },
  setFilterDimA({commit}, val) {
    commit('setFilterDimA', val)
  },
  setFilterDimB({commit}, val) {
    commit('setFilterDimB', val)
  },
  setFilterMat({commit}, val) {
    commit('setFilterMat', val)
  },
  setFilterCov({commit}, val) {
    commit('setFilterCov', val)
  }
}

export const getters = {
  getFilters(state) {
    return state.filters
  },
  getFilterDimA(state) {
    return state.filters.dimA.checked
  },
  getFilterDimB(state) {
    return state.filters.dimB.checked
  },
  getFilterMat(state) {
    return state.filters.mat.checked
  },
  getFilterCov(state) {
    return state.filters.cov.checked
  }
}
