<template>
  <div>
    <b-modal
      id="modal-shipments-details"
      size="xl"
      title="Детальная информация по заказу"
      hide-footer
    >
      <b-overlay :show="profileLoading" rounded="sm">
        <b-row v-if="$mq === 'desktop' || $mq === 'desktopSm'">
          <b-col>
            <b-table
              head-variant="light"
              table-variant="light"
              class="profile-info-table"
              bordered
              :items="shipmentsTableOpt"
              :fields="shipmentsTableFields"
            ></b-table>
          </b-col>
        </b-row>

        <b-row v-else>
          <b-col>
            <b-card
              v-for="shipmentItem in shipmentsTableOpt"
              :key="shipmentItem.barcode"
              class="mb-3 profile-modal-card"
            >
              <template #header>
                <div class="d-flex justify-content-center align-items-center">
                  <span>Артикул: <span>{{ shipmentItem['Artikul'] }}</span></span>
                </div>
              </template>
              <b-row>
                <b-col cols="12" sm="12" md="12" class="mb-3">
                  <b-card-text>
                    <span>Название: {{ shipmentItem['Product_Name'] }}</span>
                  </b-card-text>
                </b-col>
                <b-col cols="12" sm="6" md="6" class="mb-3">
                  <b-card-text>
                    <span>Упаковка: {{ shipmentItem['Ed_izm'] }}</span>
                  </b-card-text>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" sm="4" md="4" class="mb-3">
                  <b-card-text>
                    <span>Количество: {{ shipmentItem['Quantity'] }}</span>
                  </b-card-text>
                </b-col>
                <b-col cols="12" sm="4" md="4" class="mb-3">
                  <b-card-text>
                    <span>Цена: {{ shipmentItem['Price'] }}</span>
                  </b-card-text>
                </b-col>
                <b-col cols="12" sm="4" md="4" class="mb-3">
                  <b-card-text>
                    <span>Стоимость: {{ shipmentItem['Sum'] }}</span>
                  </b-card-text>
                </b-col>
                <b-col cols="12" sm="4" md="4" class="mb-3">
                  <b-card-text>
                    <span>Ставка НДС: {{ shipmentItem['NDS_rate'] }}</span>
                  </b-card-text>
                </b-col>
                <b-col cols="12" sm="4" md="4" class="mb-3">
                  <b-card-text>
                    <span>НДС: {{ shipmentItem['Sum_NDS'] }}</span>
                  </b-card-text>
                </b-col>
                <b-col cols="12" sm="4" md="4" class="mb-3">
                  <b-card-text>
                    <span>Статус: {{ shipmentItem['status'] }}</span>
                  </b-card-text>
                </b-col>
              </b-row>

              <template #footer>
                <b-row>
                  <b-col cols="12" class="d-flex justify-content-center align-items-center">
                    <span>Стоимость с НДС: {{ shipmentItem['Sum_total'] }}</span>
                  </b-col>
                </b-row>
              </template>
            </b-card>
          </b-col>
        </b-row>

        <b-row>
          <b-col offset-xl="8" offset-lg="7" cols="12" xl="4" lg="5">
            <b-table
              head-variant="dark"
              table-variant="info"
              class="profile-info-table"
              bordered
              :items="shipmentsTotalTableOpt"
              :fields="shipmentsTotalTableFields"
            ></b-table>
          </b-col>
        </b-row>
        <b-button
          variant="primary"
          size="sm"
          class="float-right mx-2"
          @click="hide"
        >
          Закрыть
        </b-button>
      </b-overlay>
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {
    hide() {
      this.$root.$emit('bv::hide::modal', 'modal-shipments-details')
    },
    openLink() {
      window.open(this.pdfInfo['Invoice'], '_blank')
    }
  },
  computed: {
    shipmentsTableOpt() {
      return this.$store.getters['profile-shipments-info/getShipmentsInfoTable'].options
    },
    shipmentsTableFields() {
      return this.$store.getters['profile-shipments-info/getShipmentsInfoTable'].fields
    },
    shipmentsTotalTableOpt() {
      return this.$store.getters['profile-shipments-info/getShipmentsInfoTableTotal'].options
    },
    shipmentsTotalTableFields() {
      return this.$store.getters['profile-orders-info/getOrderInfoTableTotal'].fields
    },
    profileLoading() {
      return this.$store.getters['active-elements/getProfileLoading']
    }
  }
}
</script>

<style scoped>

</style>
