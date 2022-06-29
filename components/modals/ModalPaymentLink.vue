<template>
  <div>
    <b-modal
      id="modal-payment-link"
      hide-footer
      title="Ссылка на оплату ЕРИП и банковской картой"
    >
      <div v-if="linkInfo['InvoiceUrl']" class="mb-3">
        <a
          target="_blank"
          :href="linkInfo['InvoiceUrl']"
        >
          Перейти к документу
        </a>
      </div>
      <span class="d-block mb-3" v-else>Документа не существует</span>
      <b-button
        :block="$mq !== 'desktop' || $mq !== 'desktopSm'"
        variant="primary"
        size="sm"
        class="float-right"
        @click="hide"
      >
        Закрыть
      </b-button>
      <b-button
        :block="$mq !== 'desktop' || $mq !== 'desktopSm'"
        v-if="linkInfo['InvoiceUrl']"
        variant="primary"
        size="sm"
        class="float-right"
        :class="$mq !== 'desktop' || $mq !== 'desktopSm' ? null : 'mx-2'"
        @click="openLink"
      >
        Перейти
      </b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {
    hide() {
      this.$root.$emit('bv::hide::modal', 'modal-payment-link')
    },
    openLink() {
      window.open(this.linkInfo['InvoiceUrl'], '_blank')
    }
  },
  computed: {
    linkInfo() {
      return this.$store.getters['profile/getPaymentLinkInfo']
    }
  }
}
</script>

<style scoped>

</style>
