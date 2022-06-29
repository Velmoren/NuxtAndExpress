<template>
  <div>
    <b-modal
      id="modal-orders-details"
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
              :items="orderTableOpt"
              :fields="orderTableFields"
            ></b-table>
          </b-col>
        </b-row>

        <b-row v-else>
          <b-col>
            <b-card
              v-for="orderItem in orderTableOpt"
              :key="orderItem.barcode"
              class="mb-3 profile-modal-card"
            >
              <template #header>
                <div class="d-flex justify-content-center align-items-center">
                  <span>Артикул: <span>{{ orderItem['Artikul'] }}</span></span>
                </div>
              </template>
              <b-row>
                <b-col cols="12" sm="12" md="12" class="mb-3">
                  <b-card-text>
                    <span>Название: {{ orderItem['Product_Name'] }}</span>
                  </b-card-text>
                </b-col>
                <b-col cols="12" sm="6" md="6" class="mb-3">
                  <b-card-text>
                    <span>Упаковка: {{ orderItem['Ed_izm'] }}</span>
                  </b-card-text>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" sm="4" md="4" class="mb-3">
                  <b-card-text>
                    <span>Количество: {{ orderItem['Quantity'] }}</span>
                  </b-card-text>
                </b-col>
                <b-col cols="12" sm="4" md="4" class="mb-3">
                  <b-card-text>
                    <span>Цена: {{ orderItem['Price'] }}</span>
                  </b-card-text>
                </b-col>
                <b-col cols="12" sm="4" md="4" class="mb-3">
                  <b-card-text>
                    <span>Стоимость: {{ orderItem['Sum'] }}</span>
                  </b-card-text>
                </b-col>
                <b-col cols="12" sm="4" md="4" class="mb-3">
                  <b-card-text>
                    <span>Ставка НДС: {{ orderItem['NDS_rate'] }}</span>
                  </b-card-text>
                </b-col>
                <b-col cols="12" sm="4" md="4" class="mb-3">
                  <b-card-text>
                    <span>НДС: {{ orderItem['Sum_NDS'] }}</span>
                  </b-card-text>
                </b-col>
                <b-col cols="12" sm="4" md="4" class="mb-3">
                  <b-card-text>
                    <span>Статус: {{ orderItem['status'] }}</span>
                  </b-card-text>
                </b-col>
              </b-row>

              <template #footer>
                <b-row>
                  <b-col cols="12" class="d-flex justify-content-center align-items-center">
                    <span>Стоимость с НДС: {{ orderItem['Sum_total'] }}</span>
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
              :items="orderTotalTableOpt"
              :fields="orderTotalTableFields"
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
      this.$root.$emit('bv::hide::modal', 'modal-orders-details')
    },
    openLink() {
      window.open(this.pdfInfo['Invoice'], '_blank')
    }
  },
  computed: {
    orderTableOpt() {
      return this.$store.getters['profile-orders-info/getOrderInfoTable'].options
    },
    orderTableFields() {
      return this.$store.getters['profile-orders-info/getOrderInfoTable'].fields
    },
    orderTotalTableOpt() {
      return this.$store.getters['profile-orders-info/getOrderInfoTableTotal'].options
    },
    orderTotalTableFields() {
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
