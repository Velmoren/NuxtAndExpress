<template>
  <section class="personal-area">
    <b-container>
      <b-row>
        <b-col>
          <breadcrumbs/>
          <page-title title="Платежи"/>
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
          ></b-table>
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
            <b-row class="border-bottom pt-2 pb-2">
              <b-col cols="12" class="mb-2 text-center">
                <b-card-text>
                  <h4>Назначение платежа</h4>
                </b-card-text>
              </b-col>
              <b-col cols="12" class="text-center">
                <b-card-text>
                  {{ card.role }}
                </b-card-text>
              </b-col>
            </b-row>

            <b-row class="border-bottom pt-2 pb-2">
              <b-col cols="12" class="text-center">
                <b-card-text>
                  <h4>Тип: <span>{{ card.type === 1 ? 'безналичная оплата' : 'наличная оплата' }}</span></h4>
                </b-card-text>
              </b-col>
            </b-row>

            <b-row class="pt-2 pb-2">
              <b-col cols="12" sm="6" md="12" class="mb-3 text-center">
                <b-card-text>
                  <h4>Сумма оплаты (приход): <span>{{ card.price_in }}</span></h4>
                </b-card-text>
              </b-col>
              <b-col cols="12" sm="6" md="12" class="text-center">
                <b-card-text>
                  <h4>Сумма оплаты (расход): <span>{{ card.price_out }}</span></h4>
                </b-card-text>
              </b-col>
            </b-row>
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
            size="sm"
          ></b-form-select>
        </b-form-group>
        <b-pagination
          small
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
    const currentPage = store.getters['profile-payments/getPaymentsCurrentPage']
    const countPage = store.getters['profile-payments/getPaymentsPerPage']
    const startData = store.getters['profile/getStartDate']
    const endData = store.getters['profile/getEndDate']

    await $axios.$get(`/api/profile/payments?id=${id}&currentPage=${currentPage}&countPage=${countPage}&startData=${startData}&endData=${endData}`).then(res => {
      store.dispatch('breadcrumbs/setBreadcrumbs', {category: `profile`})
      store.dispatch('profile-payments/setPaymentsTableData', res)
    })
  },
  computed: {
    items() {
      return this.$store.getters['profile-payments/getPaymentsTables'].options
    },
    fields() {
      return this.$store.getters['profile-payments/getPaymentsTables'].fields
    },
    rows() {
      return this.$store.getters['profile-payments/getPaymentsTotalPages']
    },
    perPage: {
      get() {
        return this.$store.getters['profile-payments/getPaymentsPerPage']
      },
      set(val) {
        this.$store.dispatch('profile-payments/setPaymentsPerPage', val)
      }
    },
    currentPage: {
      get() {
        return this.$store.getters['profile-payments/getPaymentsCurrentPage']
      },
      set(val) {
        this.$store.dispatch('profile-payments/setPaymentsCurrentPage', val)
      }
    },
    countPageOptions() {
      return this.$store.getters['profile-payments/getPaymentsCountPageOptions']
    },
    startDate() {
      return this.$store.getters['profile/getStartDate']
    },
    endDate() {
      return this.$store.getters['profile/getEndDate']
    }
  },
  methods: {
    async getPaymentsData() {
      const id = this.$store.getters['auth/getAuthUserId']
      const currentPage = this.$store.getters['profile-payments/getPaymentsCurrentPage']
      const countPage = this.$store.getters['profile-payments/getPaymentsPerPage']
      const startData = this.$store.getters['profile/getStartDate']
      const endData = this.$store.getters['profile/getEndDate']

      await this.$axios.$get(`/api/profile/payments?id=${id}&currentPage=${currentPage}&countPage=${countPage}&startData=${startData}&endData=${endData}`).then(res => {
        this.$store.dispatch('breadcrumbs/setBreadcrumbs', {category: `profile`})
        this.$store.dispatch('profile-payments/setPaymentsTableData', res)
      })
    },
  },
  watch: {
    perPage() {
      this.getPaymentsData()
    },
    currentPage() {
      this.getPaymentsData()
    },
    startDate() {
      this.getPaymentsData()
    },
    endDate() {
      this.getPaymentsData()
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

