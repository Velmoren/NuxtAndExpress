import login from "../pages/login";

export const state = () => ({
  cart: {
    totalPrice: 0,
    table: {
      fields: [
        {key: 'standartName', label: 'ОПИСАНИЕ'},
        {key: 'weight', label: 'ВЕС'},
        {key: 'price_pack', label: 'ЦЕНА ЗА 100ШТ'},
        {key: 'nds', label: 'СТАВКА НДС'},
        {key: 'nds_pack', label: 'НДС'},
        {key: 'total_nds', label: 'ЦЕНА С НДС'},
        {key: 'quantity', label: ''},
        {key: 'total', label: 'ИТОГО'},
        {key: 'delete', label: ''}
      ],
      items: []
    }
  },
  cartForm: {
    comment: '',
    delivery: 'Самовывоз',
    payment: 'Оплата ЕРИП',
    adress: ''
  },
  minPrice: 0
})

export const mutations = {
  setCartItem(state, item) {
    const searchItemInCart = state.cart.table.items.find(i => i.barcode === item['barcode'])

    if (searchItemInCart) {
      state.cart.table.items.map(i => {
        if (i.barcode === searchItemInCart.barcode) {
          i.quantity++
          i.total = i.price_one_count * i.quantity
        }
        return i
      })
    } else {
      const itemPack = +item.pack
      const itemPricePack = +item.price
      const itemNDS = +item['NDS']
      const itemNDSPrice = +(itemPricePack * (itemNDS / 100))
      const itemTotalPriceNDS = +(itemPricePack + itemNDSPrice)
      const itemTotalPriceCount = +(itemTotalPriceNDS / itemPack)

      state.cart.table.items.push({
        ...item,
        status: item.quantity,
        quantity: 1,
        price_pack: itemPricePack,
        nds: itemNDS,
        nds_pack: itemNDSPrice,
        total_nds: itemTotalPriceNDS,
        price_one_count: itemTotalPriceCount,
        total: itemTotalPriceCount,
      })
    }

    state.cart.totalPrice = +state.cart.table.items.reduce((sum, num) => {
      return sum + num.total
    }, 0).toFixed(2)

    this['$storage'].setLocalStorage('cart', JSON.stringify(state.cart))
    this['$cookiz'].set('cart', state.cart)
  },
  setCartData(state, data) {
    state.cart = data
  },
  setClearCart(state) {
    state.cart.table.items.splice(0, state.cart.table.items.length)
    state.cart.totalPrice = 0

    this['$storage'].setLocalStorage('cart', JSON.stringify(state.cart))
    this['$cookiz'].set('cart', state.cart)
  },
  setIncCount(state, id) {
    const searchItemInCart = state.cart.table.items.find(i => i.barcode === id)

    if (searchItemInCart) {
      state.cart.table.items.map(i => {
        if (i.barcode === searchItemInCart.barcode) {
          i.quantity++
          i.total = i.price_one_count * i.quantity
        }
        return i
      })
    }

    state.cart.totalPrice = +state.cart.table.items.reduce((sum, num) => {
      return sum + num.total
    }, 0).toFixed(2)

    this['$storage'].setLocalStorage('cart', JSON.stringify(state.cart))
    this['$cookiz'].set('cart', state.cart)
  },
  setDecCount(state, id) {
    const searchItemInCart = state.cart.table.items.find(i => i.barcode === id)

    if (searchItemInCart) {
      state.cart.table.items.map(i => {
        if (i.barcode === searchItemInCart.barcode) {
          if (i.quantity > 0) {
            i.quantity--
            i.total = i.price_one_count * i.quantity
          }
        }
        return i
      })
    }

    state.cart.totalPrice = +state.cart.table.items.reduce((sum, num) => {
      return sum + num.total
    }, 0).toFixed(2)

    this['$storage'].setLocalStorage('cart', JSON.stringify(state.cart))
    this['$cookiz'].set('cart', state.cart)
  },
  setChangeCount(state, pay) {
    const value = pay.value
    const searchItemInCart = state.cart.table.items.find(i => i.barcode === pay.id)

    if (searchItemInCart) {
      if (pay.value >= 0) {
        state.cart.table.items.map(i => {
          if (i.barcode === searchItemInCart.barcode) {
            i.quantity = value
            i.total = i.price_one_count * value
          }
          return i
        })
      } else {
        state.cart.table.items.map(i => {
          if (i.barcode === searchItemInCart.barcode) {
            i.quantity = 0
            i.total = 0
          }
          return i
        })
      }

      state.cart.totalPrice = +state.cart.table.items.reduce((sum, num) => {
        return sum + num.total
      }, 0).toFixed(2)
    }

    this['$storage'].setLocalStorage('cart', JSON.stringify(state.cart))
    this['$cookiz'].set('cart', state.cart)
  },
  setDeleteItem(state, id) {
    const searchItemInCartIndex = state.cart.table.items.findIndex(i => i.barcode === id)

    if (searchItemInCartIndex || searchItemInCartIndex === 0) {
      state.cart.table.items.splice(searchItemInCartIndex, 1)
    }

    state.cart.totalPrice = +state.cart.table.items.reduce((sum, num) => {
      return sum + num.total
    }, 0).toFixed(2)

    this['$storage'].setLocalStorage('cart', JSON.stringify(state.cart))
    this['$cookiz'].set('cart', state.cart)
  },
  setCommentValue(state, val) {
    state.cartForm.comment = val
  },
  setDeliveryValue(state, val) {
    state.cartForm.delivery = val
  },
  setPaymentValue(state, val) {
    state.cartForm.payment = val
  },
  setAdressValue(state, val) {
    state.cartForm.adress = val
  },
  setMinPrice(state, val) {
    state.minPrice = val
  },
}

export const actions = {
  setCartData({commit}, data) {
    commit('setCartData', data)
  },
  setCartItem({commit}, item) {
    commit('setCartItem', item)
  },
  setClearCart({commit}) {
    commit('setClearCart')
  },
  setIncCount({commit}, id) {
    commit('setIncCount', id)
  },
  setDecCount({commit}, id) {
    commit('setDecCount', id)
  },
  setChangeCount({commit}, pay) {
    commit('setChangeCount', pay)
  },
  setDeleteItem({commit}, id) {
    commit('setDeleteItem', id)
  },
  setCommentValue({commit}, val) {
    commit('setCommentValue', val)
  },
  setDeliveryValue({commit}, val) {
    commit('setDeliveryValue', val)
  },
  setPaymentValue({commit}, val) {
    commit('setPaymentValue', val)
  },
  setAdressValue({commit}, val) {
    commit('setAdressValue', val)
  },
  setMinPrice({commit}, val) {
    commit('setMinPrice', val)
  },
}

export const getters = {
  getTotalPrice(state) {
    return state.cart.totalPrice
  },
  getCartItems(state) {
    return state.cart.table
  },
  getCommentValue(state) {
    return state.cartForm.comment
  },
  getDeliveryValue(state) {
    return state.cartForm.delivery
  },
  getPaymentValue(state) {
    return state.cartForm.payment
  },
  getAdressValue(state) {
    return state.cartForm.adress
  },
  getMinPrice(state) {
    return state.minPrice
  },
  getCartItemsLength(state) {
    return state.cart.table.items.reduce((sum, cartItem) => sum + cartItem.quantity, 0)
  }
}
