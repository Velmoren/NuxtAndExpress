<template>
  <section class="product-list">
    <div class="container-custom">
      <div class="product-list-top">
        <breadcrumbs />
        <page-title :title="categoryTitle"/>
      </div>
      <div class="product-list-wrapper">
        <category-menu/>
        <product-list-content :productItems="productItems"/>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import PageTitle from "@/components/UI/PageTitle";
import CategoryMenu from "@/components/elements/CategoryMenu"
import ProductListContent from "@/components/elements/product-list/ProductListContent";

export default {
  middleware: ['isAuth', 'isOpenMobileMenu'],
  components: {Breadcrumbs, CategoryMenu, ProductListContent, PageTitle},

  async fetch({params, store, $axios}) {
    await $axios.$get(`/api/category/${params.category}`).then(res => {
      store.dispatch('breadcrumbs/setBreadcrumbs', {category: `catalog-${params.category}`})
      store.dispatch('products/setProductList', res)

      store.dispatch('checked-good/resetCurrentPage')
      store.dispatch('checked-good/resetCountPage')
    })
  },
  computed: {
    categoryTitle() {
      return this.$store.getters['breadcrumbs/getSelectedCategoryTitle']
    },
    productItems() {
      return this.$store.getters['products/getProductList']
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
