export const state = () => ({
  categories: [
    {
      id: 0,
      image: 'ico_1.svg',
      link: {name: 'catalog-category', params: {category: 'bolts'}},
      text: 'Болты с шестигранной головкой',
    },
    {
      id: 1,
      image: 'ico_2.svg',
      link: {name: 'catalog-category', params: {category: 'screws'}},
      text: 'Шурупы, винты'
    },
    {
      id: 2,
      image: 'ico_3.svg',
      link: {name: 'catalog-category', params: {category: 'wares'}},
      text: 'Изделия с внутренним шестигранником'
    },
    {
      id: 3,
      image: 'ico_4.svg',
      link: {name: 'catalog-category', params: {category: 'nuts'}},
      text: 'Гайки'
    },
    {
      id: 4,
      image: 'ico_5.svg',
      link: {name: 'catalog-category', params: {category: 'anchors'}},
      text: 'Анкера'
    },
    {
      id: 5,
      image: 'ico_6.svg',
      link: {name: 'catalog-category', params: {category: 'elements'}},
      text: 'Элементы крепления и фиксации'
    },
    {
      id: 6,
      image: 'ico_7.svg',
      link: {name: 'catalog-category', params: {category: 'washers'}},
      text: 'Шайбы'
    },
    {
      id: 7,
      image: 'ico_8.svg',
      link: {name: 'catalog-category', params: {category: 'other_bolts'}},
      text: 'Прочие болты'
    },
    {
      id: 8,
      image: 'ico_9.svg',
      link: {name: 'catalog-category', params: {category: 'other_wares'}},
      text: 'Прочие изделия'
    },
  ],
  // selectedCategoryTitle: ""
})

export const mutations = {
  // setSelectedCategoryTitle(state, title) {
  //   state.selectedCategoryTitle = title
  // },
}

export const actions = {
  // setSelectedCategoryTitle({commit}, title) {
  //   commit('setSelectedCategoryTitle', title)
  // }
}

export const getters = {
  getCategories(state) {
    return state.categories
  },
  // getSelectedCategoryTitle(state) {
  //   return state.selectedCategoryTitle
  // }
}
