<template>
  <div>
    <b-modal
      id="modal-pdf"
      hide-footer
      title="Ссылка на PDF документ"
    >
      <div v-if="pdfInfo['Invoice']" class="mb-3">
        <a
          target="_blank"
          :href="pdfInfo['Invoice']"
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
        v-if="pdfInfo['Invoice']"
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
      this.$root.$emit('bv::hide::modal', 'modal-pdf')
    },
    openLink() {
      window.open(this.pdfInfo['Invoice'], '_blank')
    }
  },
  computed: {
    pdfInfo() {
      return this.$store.getters['profile/getPDFInfo']
    }
  }
}
</script>

<style scoped>

</style>
