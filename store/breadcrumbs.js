export const state = () => ({
  selectItem: [],
  breadcrumbs: {
    "": [],
    "catalog-bolts": [
      {name: 'Главная', shortName: 'Главная', path: '/', type: 'link'},
      {name: 'Каталог', shortName: 'Каталог', path: '/catalog', type: 'link'},
      {name: 'Болты', shortName: 'Болты', path: '/catalog/bolts', type: 'span'}
    ],
    "catalog-anchors": [
      {name: 'Главная', shortName: 'Главная', path: '/', type: 'link'},
      {name: 'Каталог', shortName: 'Каталог', path: '/catalog', type: 'link'},
      {name: 'Анкера', shortName: 'Анкера', path: '/catalog/anchors', type: 'span'}
    ],
    "catalog-elements": [
      {name: 'Главная', shortName: 'Главная', path: '/', type: 'link'},
      {name: 'Каталог', shortName: 'Каталог', path: '/catalog', type: 'link'},
      {name: 'Элементы крепления', shortName: 'Элементы крепления', path: '/catalog/elements', type: 'span'}
    ],
    "catalog-nuts": [
      {name: 'Главная', shortName: 'Главная', path: '/', type: 'link'},
      {name: 'Каталог', shortName: 'Каталог', path: '/catalog', type: 'link'},
      {name: 'Гайки', shortName: 'Гайки', path: '/catalog/nuts', type: 'span'}
    ],
    "catalog-other_bolts": [
      {name: 'Главная', shortName: 'Главная', path: '/', type: 'link'},
      {name: 'Каталог', shortName: 'Каталог', path: '/catalog', type: 'link'},
      {name: 'Прочие болты', shortName: 'Прочие болты', path: '/catalog/other_bolts', type: 'span'}
    ],
    "catalog-other_wares": [
      {name: 'Главная', shortName: 'Главная', path: '/', type: 'link'},
      {name: 'Каталог', shortName: 'Каталог', path: '/catalog', type: 'link'},
      {name: 'Прочие изделия', shortName: 'Прочие изделия', path: '/catalog/other_wares', type: 'span'}
    ],
    "catalog-others_wares": [
      {name: 'Главная', shortName: 'Главная', path: '/', type: 'link'},
      {name: 'Каталог', shortName: 'Каталог', path: '/catalog', type: 'link'},
      {name: 'Прочие изделия', shortName: 'Прочие изделия', path: '/catalog/other_wares', type: 'span'}
    ],
    "catalog-screws": [
      {name: 'Главная', shortName: 'Главная', path: '/', type: 'link'},
      {name: 'Каталог', shortName: 'Каталог', path: '/catalog', type: 'link'},
      {name: 'Шурупы, винты', shortName: 'Шурупы, винты', path: '/catalog/screws', type: 'span'}
    ],
    "catalog-wares": [
      {name: 'Главная', shortName: 'Главная', path: '/', type: 'link'},
      {name: 'Каталог', shortName: 'Каталог', path: '/catalog', type: 'link'},
      {name: 'Изделия с внутренним шестигранником', shortName: 'Изделия', path: '/catalog/wares', type: 'span'}
    ],
    "catalog-washers": [
      {name: 'Главная', shortName: 'Главная', path: '/', type: 'link'},
      {name: 'Каталог', shortName: 'Каталог', path: '/catalog', type: 'link'},
      {name: 'Шайбы', shortName: 'Шайбы', path: '/catalog/washers', type: 'span'}
    ],
    "catalog": [
      {name: 'Главная', shortName: 'Главная', path: '/', type: 'link'},
      {name: 'Каталог', shortName: 'Каталог', path: '/catalog', type: 'span'}
    ],
    "news": [
      {name: 'Главная', shortName: 'Главная', path: '/', type: 'link'},
      {name: 'Новости', shortName: 'Новости', path: '/news', type: 'span'}
    ],
    "contacts": [
      {name: 'Главная', shortName: 'Главная', path: '/', type: 'link'},
      {name: 'Контакты', shortName: 'Контакты', path: '/contacts', type: 'span'}
    ],
    "about": [
      {name: 'Главная', shortName: 'Главная', path: '/', type: 'link'},
      {name: 'О компании', shortName: 'О компании', path: '/about', type: 'span'}
    ],
    "profile": [
      {name: 'Главная', shortName: 'Главная', path: '/', type: 'link'},
      {name: 'Личный кабинет', shortName: 'Личный кабинет', path: '/profile/orders', type: 'span'}
    ],
    "search": [
      {name: 'Главная', shortName: 'Главная', path: '/', type: 'link'},
      {name: 'Поиск', shortName: 'Поиск', path: '/search', type: 'span'}
    ],
    "cart": [
      {name: 'Главная', shortName: 'Главная', path: '/', type: 'link'},
      {name: 'Корзина', shortName: 'Корзина', path: '/cart', type: 'span'}
    ],
  }
})

export const mutations = {
  setBreadcrumbs(state, payload) {
    if (!payload.item) {
      state.selectItem = state.breadcrumbs[payload.category]
    } else {
      const newItem = payload.item.slice(0,35)
      const newShortItem = `${payload.item.split(" ")[0]} ${payload.item.split(" ")[1]}...`
      console.log(payload.category)
      console.log(state.breadcrumbs[payload.category])
      state.selectItem = state.breadcrumbs[payload.category].map(item => {
        return {name: item.name, path: item.path,type: 'link'}
      })

      state.selectItem.push({name: newItem, shortName: newShortItem, type: 'span'})
    }
  },
}

export const actions = {
  setBreadcrumbs({commit}, payload) {
    commit('setBreadcrumbs', payload)
  }
}

export const getters = {
  getBreadcrumbs(state) {
    return state.selectItem
  },
  getSelectedCategoryTitle(state) {
    return state.selectItem.filter(i => i.type === 'span')[0].name
  }
}
