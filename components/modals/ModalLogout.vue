<template>
  <div>
    <b-modal
      id="modal-logout"
      hide-footer
      title="Выйти из учетной записи?"
    >
      <b-button
        variant="primary"
        size="sm"
        class="float-right"
        @click="hide"
      >
        Остаться
      </b-button>
      <b-button
        variant="primary"
        size="sm"
        class="float-right mr-2"
        @click="logout"
      >
        Выйти
      </b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {
    hide() {
      this.$root.$emit('bv::hide::modal', 'modal-logout')
    },
    logout() {
      this.$cookiz.remove('auth')
      this.$store.dispatch('auth/setAuthLogout')
      this.$root.$emit('bv::hide::modal', 'modal-logout')
      this.$nuxt.$router.replace({ path: '/login'})
    }
  }
}
</script>

<style scoped>

</style>
