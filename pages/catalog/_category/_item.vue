<template>
  <section class="product-list">
    <div class="container-custom">
      <div class="product-list-top">
        <breadcrumbs/>
        <page-title :title="categoryTitle"/>
      </div>
      <div class="product-list-wrapper">
        <category-menu/>
        <characteristics/>
      </div>
    </div>
  </section>
</template>

<script>
import CategoryMenu from "../../../components/elements/CategoryMenu";
import Breadcrumbs from "../../../components/UI/Breadcrumbs";
import PageTitle from "../../../components/UI/PageTitle";
import Characteristics from "../../../components/elements/characteristics-table/Characteristics";

export default {
  middleware: ['isAuth', 'isOpenMobileMenu'],
  components: {CategoryMenu, Breadcrumbs, Characteristics, PageTitle},
  async fetch({params, store, $axios, $storage}) {
    const current = store.getters['checked-good/getCurrentPage']
    const count = store.getters['checked-good/getCountPage']

    await $axios.$get(`/api/category/item?id=${params.item}&currentPage=${current}&countPage=${count}`).then(res => {
      store.dispatch('breadcrumbs/setBreadcrumbs', {
        category: `catalog-${params.category}`,
        item: res['StdList']['STANDARTNAME']
      })
      store.dispatch('checked-good/setGood', res)
    })

    await $axios.$get(`/api/category/filters?id=${params.item}`).then(res => {
      store.dispatch('filters/setFilterList', res)
    })
  },
  computed: {
    categoryTitle() {
      return this.$store.getters['breadcrumbs/getSelectedCategoryTitle']
    },
    currentPage() {
      return this.$store.getters['checked-good/getCurrentPage']
    },
    countPage() {
      return this.$store.getters['checked-good/getCountPage']
    },
    filterDimA() {
      return this.$store.getters['filters/getFilterDimA']
    },
    filterDimB() {
      return this.$store.getters['filters/getFilterDimB']
    },
    filterMat() {
      return this.$store.getters['filters/getFilterMat']
    },
    filterCov() {
      return this.$store.getters['filters/getFilterCov']
    }
  },
  methods: {
    async getData() {
      const current = this.$store.getters['checked-good/getCurrentPage']
      const count = this.$store.getters['checked-good/getCountPage']
      const mat = this.$store.getters['filters/getFilterMat']
      const cov = this.$store.getters['filters/getFilterCov']
      const dimA = this.$store.getters['filters/getFilterDimA']
      const dimB = this.$store.getters['filters/getFilterDimB']

      await this.$axios.$get(`/api/category/filterItems?id=${this.$route.params.item}&mat=${mat}&cov=${cov}&dimA=${dimA}&dimB=${dimB}&currentPage=${current}&countPage=${count}`)
        .then(res => {
          this.$store.dispatch('checked-good/setGood', res)
        }).catch(e => {
          this.$store.dispatch('checked-good/setNotFoundGoods')
          console.error('Нет товара подходящего под данные фильтры')
        })
    }
  },
  watch: {
    currentPage() {
      this.getData()
    },
    countPage() {
      this.getData()
    },
    filterDimA() {
      this.getData()
      this.$store.dispatch('checked-good/resetPagination')
    },
    filterDimB() {
      this.getData()
      this.$store.dispatch('checked-good/resetPagination')
    },
    filterMat() {
      this.getData()
      this.$store.dispatch('checked-good/resetPagination')
    },
    filterCov() {
      this.getData()
      this.$store.dispatch('checked-good/resetPagination')
    }
  }
}
</script>

<style lang="scss" scoped>
.product-list {
  &-top {
    position: sticky;
    top: 65px;
    z-index: 95;
    background-color: $sections-background-blue;
  }

  &-title {
    margin-top: 10px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    color: $main-white-text;
    font-weight: bold;
  }

  &-wrapper {
    display: flex;
    justify-content: space-between;
    padding-bottom: 50px;
  }
}

@media (max-width: 1400px) {
  .product-list {
    &-top {
      top: 60px;
    }
  }
}

@media (max-width: 1200px) {
  .product-list {
    &-top {
      top: 50px;
    }
  }
}

@media (max-width: 991px) {
  .product-list {
    &-top {
      top: 40px;
    }
  }
}
</style>
