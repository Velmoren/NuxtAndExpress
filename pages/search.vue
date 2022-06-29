<template>
  <section class="product-list">
    <div class="container-custom">
      <div class="product-list-top">
        <breadcrumbs />
        <page-title title="Поиск"/>
      </div>
      <div class="product-list-wrapper">
        <category-menu/>
        <product-list-content-search :productItems="productItems"/>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import PageTitle from "@/components/UI/PageTitle";
import CategoryMenu from "@/components/elements/CategoryMenu"
import ProductListContentSearch from "@/components/elements/search/ProductListContentSearch";

export default {
  middleware: ['isAuth', 'isOpenMobileMenu'],
  components: {Breadcrumbs, CategoryMenu, ProductListContentSearch, PageTitle},
  async fetch({query, store, $axios}) {
    const str = query ? query.str : ''

    await $axios.$get(`/api/search?str=${str}`).then(res => {
      store.dispatch('breadcrumbs/setBreadcrumbs', {category: `search`})
      store.dispatch('search/setSearchList', res)
      store.dispatch('search/resetSearchInputValue')
      // store.dispatch('checked-good/resetCurrentPage')
      // store.dispatch('checked-good/resetCountPage')
    })
  },
  computed: {
    productItems() {
      return this.$store.getters['search/getSearchList']
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

  &-wrapper {
    display: flex;
    justify-content: space-between;
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

