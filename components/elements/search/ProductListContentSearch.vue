<template>
  <div class="product-list-content">
    <big-input-and-button/>

    <product-list-item-search
      v-for="(item, idx) in productItems" :key="idx"
      :item="item"
    />
  </div>
</template>

<script>
import BigInputAndButton from "@/components/UI/inputs/BigInputAndButton";
import ProductListItemSearch from "@/components/UI/cards/ProductListItemSearch";

export default {
  components: {BigInputAndButton, ProductListItemSearch},
  props: {
    productItems: {
      type: Array,
      required: true
    }
  },
  methods: {
    backImage(img) {
      return {backgroundImage: `url(${img ? img : require('~/assets/images/prod_img.jpg')})`}
    }
  },
}
</script>

<style lang="scss" scoped>
.product-list {
  &-content {
    width: 1030px;
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 1400px) {
  .product-list {
    &-content {
      width: 860px;
    }
  }
}

@media (max-width: 1200px) {
  .product-list {
    &-content {
      width: 690px;
    }
  }
}

@media (max-width: 991px) {
  .product-list {
    &-content {
      width: 100%;
    }
  }
}
</style>
