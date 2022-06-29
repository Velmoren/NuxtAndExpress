<template>
  <b-form-group
    label="Тип оплаты"
    v-slot="{ ariaDescribedby }"
    class="mb-0 cart-form-group-radios"
  >
    <b-form-radio
      v-model="selected"
      :aria-describedby="ariaDescribedby"
      name="byGroup"
      value="Оплата ЕРИП"
    >
      Оплата ЕРИП
    </b-form-radio>
    <b-form-radio
      v-model="selected"
      :aria-describedby="ariaDescribedby"
      name="byGroup"
      value="Оплата картой"
    >
      Оплата картой
    </b-form-radio>
  </b-form-group>
</template>

<script>
export default {
  computed: {
    selected: {
      get() {
        return this.$store.getters['cart/getPaymentValue']
      },
      set(val) {
        this.$store.dispatch('cart/setPaymentValue', val)
      }
    }
  }
}
</script>

<style scoped>

</style>
