<template>
  <div class="phone-button" @click="openPhoneModal">
    <b-icon icon="telephone-fill" font-scale="1.5"></b-icon>
  </div>
</template>

<script>
export default {
  methods: {
    openPhoneModal() {
      this.$root.$emit('bv::show::modal', 'phone-modal')
    }
  }
}
</script>

<style lang="scss" scoped>
  .phone-button {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
