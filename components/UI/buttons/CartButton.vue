<template>
  <NuxtLink
    to="/cart"
    class="cart-link"
  >
    <b-icon icon="cart-fill" scale="1.2"></b-icon>
    <client-only>
      <span class="cart-link__badge" v-if="cartItemsLength !== 0">{{cartItemsLength}}</span>
    </client-only>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    cartItemsLength: {
      type: Number,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  min-width: 40px;
  height: 40px !important;
  margin-right: 10px;
  position: relative;

  &__badge {
    position: absolute;
    top: 3px;
    left: 25px;
    padding: 2px;
    border-radius: 5px;
    background-color: $back-blue;
    color: $main-white-text;
  }

  svg {
    width: 21px;
    height: 21px;
  }
}
</style>
