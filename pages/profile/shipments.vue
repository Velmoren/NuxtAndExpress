<template>
  <section class="personal-area">
    <b-container>
      <b-row>
        <b-col>
          <breadcrumbs/>
          <page-title title="Отгрузки"/>
        </b-col>
      </b-row>
      <b-row class="mb-3">
        <b-col cols="12" md="5" lg="6" xl="7"
               class="mb-2 mb-md-0 d-flex justify-content-center justify-content-md-start">
          <personal-area-tabs/>
        </b-col>
        <b-col cols="12" md="7" lg="6" xl="5" class="d-flex justify-content-center justify-content-md-end">
          <personal-area-filter-date/>
        </b-col>
      </b-row>
      <b-row v-if="$mq === 'desktop' || $mq === 'desktopSm'">
        <b-col>
          <b-table
            head-variant="light"
            table-variant="light"
            bordered
            :items="items"
            :fields="fields"
            table-class="profile-table"
          >
            <template #cell(pdf)="data">
              <a
                href="#"
                @click.prevent="getLinkPDF(data.item.id)"
                class="header-profile header-link d-flex justify-content-center"
              >
                <b-icon icon="printer-fill" scale="2" :id="`pdf-${data.item.id}`"></b-icon>
                <b-tooltip :target="`pdf-${data.item.id}`" triggers="hover">
                  Счет на оплату
                </b-tooltip>
              </a>
            </template>

            <template #cell(details)="data">
              <a
                href="#"
                @click.prevent="getShipmentsDetails(data.item.id)"
                v-b-modal.modal-shipments-details
                class="header-profile header-link d-flex justify-content-center"
              >
                <b-icon icon="search" scale="2" :id="`details-${data.item.id}`"></b-icon>
                <b-tooltip :target="`details-${data.item.id}`" triggers="hover">
                  Информация о заказе
                </b-tooltip>
              </a>
            </template>
          </b-table>
        </b-col>
      </b-row>

      <b-row v-else class="mb-3 profile-cards">
        <b-col
          v-for="card in items"
          :key="card.id"
          cols="12"
          md="6"
          class="mb-3"
        >
          <b-card>
            <template #header>
              <div class="d-flex justify-content-between align-items-center">
                <h4>Номер: <span>{{ card.number }}</span></h4>
                <span>{{ card.date }}</span>
              </div>
            </template>
            <b-row>
              <b-col cols="12" sm="6" md="12" class="mb-3">
                <b-card-text>
                  <span>Номер БСО: {{ card.bso }}</span>
                </b-card-text>
              </b-col>
              <b-col cols="12" sm="6" md="12" class="mb-3">
                <b-card-text>
                  <span>Доставка: {{ card.delivery }}</span>
                </b-card-text>
              </b-col>
              <b-col cols="12" sm="6" md="12" class="mb-3" v-if="card.contract">
                <b-card-text>
                  <span>Договор: {{ card.contract }}</span>
                </b-card-text>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" sm="4" md="12" class="mb-3">
                <b-card-text>
                  <span>Стоимость: {{ card.price }}</span>
                </b-card-text>
              </b-col>
              <b-col cols="12" sm="4" md="12" class="mb-3">
                <b-card-text>
                  <span>НДС: {{ card.nds }}</span>
                </b-card-text>
              </b-col>
              <b-col cols="12" sm="4" md="12" class="mb-3">
                <b-card-text>
                  <span>ИТОГО: {{ card.fullPrice }}</span>
                </b-card-text>
              </b-col>
              <b-col v-if="card.dateDelivery" cols="12" sm="4" md="12" class="mb-3">
                <b-card-text>
                  <span>Дата отгрузки: {{ card.dateDelivery }}</span>
                </b-card-text>
              </b-col>
            </b-row>

            <template #footer>
              <b-row>
                <b-col cols="6" class="d-flex justify-content-center align-items-center">
                  <b-button
                    size="sm"
                    variant="primary"
                    @click.prevent="getShipmentsDetails(card.id)"
                    v-b-modal.modal-orders-details
                  >
                    <b-icon icon="search" scale="1"></b-icon>
                  </b-button>
                </b-col>
                <b-col cols="6" class="d-flex justify-content-center align-items-center">
                  <b-button
                    size="sm"
                    variant="primary"
                    @click.prevent="getLinkPDF(card.id)"
                    v-b-modal.modal-pdf
                  >
                    <b-icon icon="printer-fill" scale="1"></b-icon>
                  </b-button>
                </b-col>
              </b-row>
            </template>
          </b-card>
        </b-col>
      </b-row>

      <div class="d-flex justify-content-between w-100">
        <b-form-group
          class="mb-0"
        >
          <b-form-select
            class="per-page"
            id="per-page-select"
            v-model="perPage"
            :options="countPageOptions"
            size="md"
          ></b-form-select>
        </b-form-group>
        <b-pagination
          size="md"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          align="right"
        ></b-pagination>
      </div>
    </b-container>
  </section>
</template>

<script>
import Breadcrumbs from "~/components/UI/Breadcrumbs";
import PageTitle from "~/components/UI/PageTitle";
import PersonalAreaTabs from "@/components/elements/profile/PersonalAreaTabs";
import PersonalAreaFilterDate from "@/components/elements/profile/PersonalAreaFilterDate";

export default {
  middleware: ['protectProfile', 'isOpenMobileMenu'],
  components: {Breadcrumbs, PageTitle, PersonalAreaTabs, PersonalAreaFilterDate},
  async fetch({params, store, $axios}) {
    const id = store.getters['auth/getAuthUserId']
    const currentPage = store.getters['profile-shipments/getShipmentsCurrentPage']
    const countPage = store.getters['profile-shipments/getShipmentsPerPage']
    const startData = store.getters['profile/getStartDate']
    const endData = store.getters['profile/getEndDate']

    await $axios.$get(`/api/profile/shipments?id=${id}&currentPage=${currentPage}&countPage=${countPage}&startData=${startData}&endData=${endData}`).then(res => {
      store.dispatch('breadcrumbs/setBreadcrumbs', {category: `profile`})
      store.dispatch('profile-shipments/setShipmentsTableData', res)
    })
  },
  computed: {
    items() {
      return this.$store.getters['profile-shipments/getShipmentsTables'].options
    },
    fields() {
      return this.$store.getters['profile-shipments/getShipmentsTables'].fields
    },
    rows() {
      return this.$store.getters['profile-shipments/getShipmentsTotalPages']
    },
    perPage: {
      get() {
        return this.$store.getters['profile-shipments/getShipmentsPerPage']
      },
      set(val) {
        this.$store.dispatch('profile-shipments/setShipmentsPerPage', val)
      }
    },
    currentPage: {
      get() {
        return this.$store.getters['profile-shipments/getShipmentsCurrentPage']
      },
      set(val) {
        this.$store.dispatch('profile-shipments/setShipmentsCurrentPage', val)
      }
    },
    countPageOptions() {
      return this.$store.getters['profile-shipments/getShipmentsCountPageOptions']
    },
    startDate() {
      return this.$store.getters['profile/getStartDate']
    },
    endDate() {
      return this.$store.getters['profile/getEndDate']
    }
  },
  methods: {
    async getShipmentData() {
      const id = this.$store.getters['auth/getAuthUserId']
      const currentPage = this.$store.getters['profile-shipments/getShipmentsCurrentPage']
      const countPage = this.$store.getters['profile-shipments/getShipmentsPerPage']
      const startData = this.$store.getters['profile/getStartDate']
      const endData = this.$store.getters['profile/getEndDate']

      await this.$axios.$get(`/api/profile/shipments?id=${id}&currentPage=${currentPage}&countPage=${countPage}&startData=${startData}&endData=${endData}`).then(res => {
        this.$store.dispatch('breadcrumbs/setBreadcrumbs', {category: `profile`})
        this.$store.dispatch('profile-shipments/setShipmentsTableData', res)
      })
    },
    async getLinkPDF(id) {
      await this.$store.dispatch('profile/setPDFInfoClear')
      await this.$axios.$get(`/api/pdf?id=${id}`).then(res => {
        if (res['Invoice']) {
          this.$store.dispatch('profile/setPDFInfo', res)
        }

        this.$root.$emit('bv::show::modal', 'modal-pdf')
      })

      // v-b-modal.modal-pdf
    },
    async getShipmentsDetails(id) {
      await this.$store.dispatch('active-elements/setProfileLoading', true)

      await this.$axios.$get(`/api/profile/shipments/info?id=${id}`).then(res => {
        this.$store.dispatch('profile-shipments-info/setShipmentsInfoData', res)
        this.$store.dispatch('active-elements/setProfileLoading', false)
      })
    }
  },
  watch: {
    perPage() {
      this.getShipmentData()
    },
    currentPage() {
      this.getShipmentData()
    },
    startDate() {
      this.getShipmentData()
    },
    endDate() {
      this.getShipmentData()
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-cards {
  display: none;
}

.card {
  min-height: 100%;
}

@media (max-width: 991px) {
  table {
    display: none;
  }

  .profile-cards {
    display: flex;
  }
}
</style>

