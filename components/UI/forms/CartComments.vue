<template>
  <b-form-group
    label="Комментарий к заказу"
    label-for="cart-comment-textarea"
    class="mb-4 mb-lg-0 cart-form-group-textarea"
  >
    <b-form-textarea
      id="cart-comment-textarea"
      v-model="comment"
      placeholder="Оставьте комментарий к заказу"
      rows="4"
      max-rows="5"
      name="comment"
    ></b-form-textarea>
  </b-form-group>
</template>

<script>
export default {
  computed: {
    comment: {
      get() {
        return this.$store.getters['cart/getCommentValue']
      },
      set(val) {
        this.$store.dispatch('cart/setCommentValue', val)
      }
    }
  }
}
</script>

<style lang="scss">

</style>
