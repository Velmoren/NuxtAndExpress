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
  shipment: {
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
  setShipmentsInfoData(state, shipment) {
    state.shipment.table.options = shipment['Doc_Items']
    state.shipment.table.options.map(item => {
      item['Currency'] = shipment['Currency']
      item['status'] = 'В наличии'
      return item
    })

    state.shipment.currency = shipment['Currency']
    state.shipment.currency_id = shipment['Currency_id']
    state.shipment.loadDate = shipment['LoadDate']
    state.shipment.sum = shipment['Sum']
    state.shipment.nds = shipment['Sum_NDS']
    state.shipment.total = shipment['Sum_total']
    state.shipment.comment = shipment['comment']
    state.shipment.delivery = shipment['delivery']
    state.shipment.deliveryAdress = shipment['deliveryAdress']
    state.shipment.payment = shipment['payment']

    state.total.table.options[0]['Sum'] = shipment['Sum']
    state.total.table.options[0]['Sum_NDS'] = shipment['Sum_NDS']
    state.total.table.options[0]['Sum_total'] = shipment['Sum_total']
  }
}

export const actions = {
  setShipmentsInfoData({commit}, shipment) {
    commit('setShipmentsInfoData', shipment)
  }
}

export const getters = {
  getShipmentsInfoTable(state) {
    return state.shipment.table
  },
  getShipmentsInfoTableTotal(state) {
    return state.total.table
  }
}
