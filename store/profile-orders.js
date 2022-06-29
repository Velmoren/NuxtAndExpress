export const state = () => ({
  startDate: '',
  endDate: '',
  orders: {
    tables: {
      fields: [
        { key: 'number', label: 'Номер' },
        { key: 'date', label: 'Дата' },
        { key: 'price', label: 'Стоимость' },
        { key: 'nds', label: 'НДС' },
        { key: 'fullPrice', label: 'ИТОГО' },
        { key: 'delivery', label: 'Доставка' },
        { key: 'details', label: 'Детали' },
        { key: 'pdf', label: 'Печать' },
        { key: 'status', label: 'Статус' },
        { key: 'dateDelivery', label: 'Дата отгрузки' },
        { key: 'payments', label: 'Оплата' },
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
    }
  },
  payments: {
    tables: {
      fields: [
        { key: 'number', label: 'Номер' },
        { key: 'date', label: 'Дата' },
        { key: 'nazn', label: 'Назначение платежа' },
        { key: 'nds', label: 'Full Name' },
        { key: 'Sum_in', label: 'Сумма оплаты (приход)' },
        { key: 'Sum_out', label: 'Сумма оплаты (расход)' },
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
  info: {
    table: []
  }
})

export const mutations = {
  setChangeStartDate(state, val) {
    state.startDate = val
  },
  setChangeEndDate(state, val) {
    state.endDate = val
  },
  resetInputsDate(state) {
    state.startDate = ''
    state.endDate = ''
  },
  setOrdersTableData(state, obj) {
    state.orders.tables.options = obj['Documents'].map(item => {
      return {
        id: item['Doc_id'],
        number: item['Doc_Number'],
        date: item['Doc_Date'],
        price: item['Sum'],
        nds: item['Sum_NDS'],
        fullPrice: item['Sum_total'],
        currency: item['Currency'],
        currencyId: item['Currency_id'],
        payment: item['Payment'],
        delivery: item['delivery'],
        deliveryAddress: item['deliveryAdress'],
        status: item['Status'],
        dateDelivery: item['LoadDate'],
      }
    })
    state.orders.tables.totalPages = obj['totalsize']
  },
  setPaymentsTableData(state, obj) {

  },
  setOrdersPerPage(state, val) {
    state.orders.tables.countPage = val
  },
  getOrdersCurrentPage(state, val) {
    state.orders.tables.currentPage = val
  }
}

export const actions = {
  setChangeStartDate({commit}, val) {
    commit('setChangeStartDate', val)
  },
  setChangeEndDate({commit}, val) {
    commit('setChangeEndDate', val)
  },
  resetInputsDate({commit}) {
    commit('resetInputsDate')
  },
  setOrdersTableData({commit}, obj) {
    commit('setOrdersTableData', obj)
  },
  setPaymentsTableData({commit}, obj) {
    commit('setPaymentsTableData', obj)
  },
  setShipmentsTableData({commit}, obj) {
    commit('setShipmentsTableData', obj)
  },
  setOrdersPerPage({commit}, val) {
    commit('setOrdersPerPage', val)
  },
  setOrdersCurrentPage({commit}, val) {
    commit('getOrdersCurrentPage', val)
  }
}

export const getters = {
  getStartDate(state) {
    return state.startDate
  },
  getEndDate(state) {
    return state.endDate
  },
  getOrdersTables(state) {
    return state.orders.tables
  },
  getOrdersPerPage(state) {
    return state.orders.tables.countPage
  },
  getOrdersCurrentPage(state) {
    return state.orders.tables.currentPage
  },
  getOrdersCountPageOptions(state) {
    return state.orders.tables.countPageOptions
  },
  getOrdersTotalPages(state) {
    return state.orders.tables.totalPages
  },
  //shipments
  getShipmentsTables(state) {
    return state.shipments.tables
  },
  getShipmentsPerPage(state) {
    return state.shipments.tables.countPage
  },
  getShipmentsCurrentPage(state) {
    return state.shipments.tables.currentPage
  },
  getShipmentsCountPageOptions(state) {
    return state.shipments.tables.countPageOptions
  },
  getShipmentsTotalPages(state) {
    return state.shipments.tables.totalPages
  },
}
