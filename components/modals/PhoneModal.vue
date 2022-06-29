<template>
  <div>
    <b-modal
      id="phone-modal"
      hide-footer
      title="Телефоны"
      centered
    >
      <div class="phone-modal-wrapper">
        <b-link class="phone-modal-link" :href="`tel:${contacts.tel}`">{{contacts.tel}}</b-link>
        <b-link class="phone-modal-link" :href="`tel:${contacts.tel1}`">{{contacts.tel1}}</b-link>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  computed: {
    contacts() {
      return this.$store.getters['contacts/getContacts']
    },
  },
  methods: {
    hide() {
      this.$root.$emit('bv::hide::modal', 'phone-modal')
    },
  }
}
</script>

<style lang="scss" scoped>
.phone-modal {
  &-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &-link {
    font-size: 20px;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
}
</style>
