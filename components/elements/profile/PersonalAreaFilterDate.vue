<template>
  <div class="personal-area-controls__filters d-flex">
    <b-form-input class="mr-2 input-profile" size="sm" type="date" v-model="changeStartDate"></b-form-input>
    <b-form-input
      class="mr-2 input-profile"
      size="sm"
      type="date"
      v-model="changeEndDate"
    ></b-form-input>
    <b-button size="sm" variant="primary" @click="resetInputsDate">
      <span v-if="$mq === 'desktopSm' || $mq === 'desktop'">Сброс</span>
      <b-icon v-else icon="x" variant="light"></b-icon>
    </b-button>
  </div>
</template>

<script>
export default {
  computed: {
    changeStartDate: {
      get() {
        return this.$store.getters['profile/getStartDate']
      },
      set(val) {
        this.$store.dispatch('profile/setChangeStartDate', val)
      }
    },
    changeEndDate: {
      get() {
        return this.$store.getters['profile/getEndDate']
      },
      set(val) {
        this.$store.dispatch('profile/setChangeEndDate', val)
      }
    }
  },
  methods: {
    resetInputsDate() {
      this.$store.dispatch('profile/resetInputsDate')
    }
  }
}
</script>

<style lang="scss" scoped>
.input-profile {
  height: 100%;
}

@media (max-width: 576px) {
  .input-profile {
    font-size: 12px;
    max-width: 120px;
    width: 120px;
  }
}
</style>
