export const state = () => ({
  shipments: {
    tables: {
      fields: [
        { key: 'number', label: 'Номер' },
        { key: 'date', label: 'Дата' },
        { key: 'contract', label: 'Договор' },
        { key: 'bso', label: 'Номер БСО' },
        { key: 'price', label: 'Стоимость' },
        { key: 'nds', label: 'НДС' },
        { key: 'fullPrice', label: 'ИТОГО' },
        { key: 'details', label: 'Детали' },
        { key: 'pdf', label: 'Печать' },
        { key: 'delivery', label: 'Доставка' }
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
  setShipmentsTableData(state, obj) {
    state.shipments.tables.options = obj['Documents'].map(item => {
      return {
        id: item['Doc_id'],
        number: item['Doc_Number'],
        date: item['Doc_Date'],
        contract: item['Contract'],
        bso: item['NumBSO'],
        price: item['Sum'],
        nds: item['Sum_NDS'],
        fullPrice: item['Sum_total'],
        delivery: item['delivery'],
        deliveryAdress: item['deliveryAdress']
      }
    })
    state.shipments.tables.totalPages = obj['totalsize']
  },
  setShipmentsPerPage(state, val) {
    state.shipments.tables.countPage = val
  },
  setShipmentsCurrentPage(state, val) {
    state.shipments.tables.currentPage = val
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
  setShipmentsTableData({commit}, obj) {
    commit('setShipmentsTableData', obj)
  },
  setShipmentsPerPage({commit}, val) {
    commit('setShipmentsPerPage', val)
  },
  setShipmentsCurrentPage({commit}, val) {
    commit('setShipmentsCurrentPage', val)
  }
}

export const getters = {
  getStartDate(state) {
    return state.startDate
  },
  getEndDate(state) {
    return state.endDate
  },
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
