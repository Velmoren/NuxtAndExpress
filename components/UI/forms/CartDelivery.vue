<template>
  <b-form-group
    label="Условия получения товара"
    v-slot="{ ariaDescribedby }"
    class="mb-4 mb-lg-0 cart-form-group-radios"
  >
    <b-form-radio
      v-model="selected"
      :aria-describedby="ariaDescribedby"
      name="deliveryGroup"
      value="Самовывоз"
    >
      Самовывоз
    </b-form-radio>
    <b-form-radio
      v-model="selected"
      :aria-describedby="ariaDescribedby"
      name="deliveryGroup"
      value="Доставка"
    >
      Доставка
    </b-form-radio>
    <b-form-input
      size="sm"
      v-model="adress"
      placeholder="Адрес доставки"
      v-if="selected === 'Доставка'"
      class="mt-4"
    ></b-form-input>
  </b-form-group>
</template>

<script>
export default {
  computed: {
    selected: {
      get() {
        return this.$store.getters['cart/getDeliveryValue']
      },
      set(val) {
        this.$store.dispatch('cart/setDeliveryValue', val)
      }
    },
    adress: {
      get() {
        return this.$store.getters['cart/getAdressValue']
      },
      set(val) {
        this.$store.dispatch('cart/setAdressValue', val)
      }
    }
  }
}
</script>

<style scoped>

</style>
