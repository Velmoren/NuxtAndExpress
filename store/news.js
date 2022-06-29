export const state = () => ({
  news: [],
  checkedItem: null
})

export const mutations = {
  setNews(state, news) {
    state.news = news.map((item, id) => {
      return {
        dateEnd: item['DateEnd'],
        dateStart: item['DateStart'],
        title: item['MarketActionName'],
        smallText: item['Comment'].slice(0,100) + '...',
        id: id
      }
    })
  },

  setCheckedItem(state, checkedItem) {
    state.checkedItem = {
      dateEnd: checkedItem['DateEnd'],
      dateStart: checkedItem['DateStart'],
      title: checkedItem['MarketActionName'],
      text: checkedItem['Comment'],
    }
  }
}

export const actions = {
  setNews({commit}, news) {
    commit('setNews', news)
  },
  setCheckedItem({commit}, checkedItem) {
    commit('setCheckedItem', checkedItem)
  }
}

export const getters = {
  getNews(state) {
    return state.news
  },
  getCheckedNews(state) {
    return state.checkedItem
  }
}
