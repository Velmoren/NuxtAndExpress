export const state = () => ({
  payments: {
    tables: {
      fields: [
        { key: 'number', label: 'Номер' },
        { key: 'date', label: 'Дата' },
        { key: 'role', label: 'Назначение платежа' },
        { key: 'price_in', label: 'Сумма оплаты (приход)' },
        { key: 'price_out', label: 'Сумма оплаты (расход)' },
        { key: 'type', label: 'Тип' },
      ],
      options: [],
      currentPage: 1,
      countPage: 10,
      totalPages: 1,
      countPageOptions: [
        {text: '10', value: 10},
        {text: '20', value: 20},
        {text: '30', value: 30},
        {text: '50', value: 50},
        {text: '100', value: 100},
      ],
    },
  },
})

export const mutations = {
  setPaymentsTableData(state, obj) {
    state.payments.tables.options = obj['Documents'].map(item => {
      return {
        id: item['Doc_id'],
        number: item['Doc_Number'],
        date: item['Doc_Date'],
        role: item['nazn'],
        price_in: item['Sum_in'],
        price_out: item['Sum_out'],
        currency: item['Currency'],
        type: item['type'],
      }
    })
    state.payments.tables.totalPages = obj['totalsize']
  },
  setPaymentsPerPage(state, val) {
    state.payments.tables.countPage = val
  },
  getPaymentsCurrentPage(state, val) {
    state.payments.tables.currentPage = val
  }
}

export const actions = {
  setPaymentsTableData({commit}, obj) {
    commit('setPaymentsTableData', obj)
  },
  setPaymentsPerPage({commit}, val) {
    commit('setOrdersPerPage', val)
  },
  setPaymentsCurrentPage({commit}, val) {
    commit('getOrdersCurrentPage', val)
  }
}

export const getters = {
  getPaymentsTables(state) {
    return state.payments.tables
  },
  getPaymentsPerPage(state) {
    return state.payments.tables.countPage
  },
  getPaymentsCurrentPage(state) {
    return state.payments.tables.currentPage
  },
  getPaymentsCountPageOptions(state) {
    return state.payments.tables.countPageOptions
  },
  getPaymentsTotalPages(state) {
    return state.payments.tables.totalPages
  },
}
