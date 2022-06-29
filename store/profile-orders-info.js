export const state = () => ({
  total: {
    table: {
      fields: [
        { key: 'Sum', label: 'Стоимость' },
        { key: 'Sum_NDS', label: 'НДС' },
        { key: 'Sum_total', label: 'Стоимость с НДС' },
      ],
      options: [{'Sum': 0, 'Sum_NDS': 0, 'Sum_total': 0}],
    }
  },
  order: {
    table: {
      fields: [
        { key: 'Artikul', label: 'Артикул' },
        { key: 'Product_Name', label: 'Название' },
        { key: 'Ed_izm', label: 'Упаковка' },
        { key: 'Quantity', label: 'Количество' },
        { key: 'status', label: 'Статус' },
        { key: 'Price', label: 'Цена' },
        { key: 'Sum', label: 'Стоимость' },
        { key: 'NDS_rate', label: 'Ставка НДС' },
        { key: 'Sum_NDS', label: 'НДС' },
        { key: 'Sum_total', label: 'Стоимость с НДС' },
        { key: 'Currency', label: 'Валюта' },
      ],
      options: [],
    },
    currency: '',
    currency_id: '',
    loadDate: '',
    sum: 0,
    nds: 0,
    total: 0,
    comment: '',
    delivery: '',
    deliveryAdress: '',
    payment: ''
  }
})

export const mutations = {
  setOrderInfoData(state, order) {
    state.order.table.options = order['Doc_Items']
    state.order.table.options.map(item => {
      item['Currency'] = order['Currency']
      item['status'] = 'В наличии'
      return item
    })

    state.order.currency = order['Currency']
    state.order.currency_id = order['Currency_id']
    state.order.loadDate = order['LoadDate']
    state.order.sum = order['Sum']
    state.order.nds = order['Sum_NDS']
    state.order.total = order['Sum_total']
    state.order.comment = order['comment']
    state.order.delivery = order['delivery']
    state.order.deliveryAdress = order['deliveryAdress']
    state.order.payment = order['payment']

    state.total.table.options[0]['Sum'] = order['Sum']
    state.total.table.options[0]['Sum_NDS'] = order['Sum_NDS']
    state.total.table.options[0]['Sum_total'] = order['Sum_total']
  }
}

export const actions = {
  setOrderInfoData({commit}, order) {
    commit('setOrderInfoData', order)
  }
}

export const getters = {
  getOrderInfoTable(state) {
    return state.order.table
  },
  getOrderInfoTableTotal(state) {
    return state.total.table
  }
}
