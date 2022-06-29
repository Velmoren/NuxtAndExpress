<template>
  <section class="personal-area">
    <b-container>
      <b-row>
        <b-col>
          <breadcrumbs/>
          <page-title title="Информация"/>
        </b-col>
      </b-row>
      <b-row class="mb-3">
        <b-col cols="12" md="5" lg="6" xl="7"
               class="mb-2 mb-md-0 d-flex justify-content-center justify-content-md-start">
          <personal-area-tabs/>
        </b-col>
      </b-row>
      <b-row v-if="$mq === 'desktop' || $mq === 'desktopSm'">
        <b-col cols="12" lg="6" xl="5">
          <b-table-simple hover caption-top>
            <b-tbody>
              <b-tr>
                <b-th variant="secondary">Краткое наименование:</b-th>
                <b-td variant="light">{{items['Name']}}</b-td>
              </b-tr>
              <b-tr>
                <b-th variant="secondary">Полное наименование:</b-th>
                <b-td variant="light">{{items['FullName']}}</b-td>
              </b-tr>
              <b-tr>
                <b-th variant="secondary">УНП:</b-th>
                <b-td variant="light">{{items['UNP']}}</b-td>
              </b-tr>
              <b-tr>
                <b-th variant="secondary">OKPO:</b-th>
                <b-td variant="light">{{items['OKPO']}}</b-td>
              </b-tr>
              <b-tr>
                <b-th variant="secondary">Расчетный счет:</b-th>
                <b-td variant="light">{{items['AccNumber']}}</b-td>
              </b-tr>
              <b-tr>
                <b-th variant="secondary">БИК банка:</b-th>
                <b-td variant="light">{{items['BIC']}}</b-td>
              </b-tr>
              <b-tr>
                <b-th variant="secondary">Банк:</b-th>
                <b-td variant="light">{{items['BankName']}}</b-td>
              </b-tr>
              <b-tr>
                <b-th variant="secondary">Адрес:</b-th>
                <b-td variant="light">{{items['Adress']}}</b-td>
              </b-tr>
              <b-tr>
                <b-th variant="secondary">Email:</b-th>
                <b-td variant="light">{{items['Email']}}</b-td>
              </b-tr>
              <b-tr>
                <b-th variant="secondary">Phone:</b-th>
                <b-td variant="light">{{items['Phone']}}</b-td>
              </b-tr>
              <b-tr>
                <b-th variant="secondary">ФИО руководителя:</b-th>
                <b-td variant="light">{{items['DirectorName']}}</b-td>
              </b-tr>
              <b-tr>
                <b-th variant="secondary">Должность руководителя:</b-th>
                <b-td variant="light">{{items['DirectorPosition']}}</b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
        </b-col>
      </b-row>

      <b-row v-else class="mb-3 profile-cards">
        <b-col cols="12">
          <b-card no-body>
            <template #header>
              <div class="d-flex flex-column flex-sm-row">
                <h4 class="profile-info-title">Краткое наименование:</h4>
                <span class="profile-info-subtitle">{{items['Name']}}</span>
              </div>
            </template>
            <b-row>
              <b-col cols="12">
                <b-card-text class="d-flex flex-column border-bottom p-3 flex-sm-row">
                  <h4 class="profile-info-title">Полное наименование: </h4>
                  <span class="profile-info-subtitle">{{items['FullName']}}</span>
                </b-card-text>
                <b-card-text class="d-flex flex-column border-bottom p-3 flex-sm-row">
                  <h4 class="profile-info-title">УНП: </h4>
                  <span class="profile-info-subtitle">{{items['UNP']}}</span>
                </b-card-text>
                <b-card-text class="d-flex flex-column border-bottom p-3 flex-sm-row">
                  <h4 class="profile-info-title">OKPO: </h4>
                  <span class="profile-info-subtitle">{{items['OKPO']}}</span>
                </b-card-text>
                <b-card-text class="d-flex flex-column border-bottom p-3 flex-sm-row">
                  <h4 class="profile-info-title">Расчетный счет: </h4>
                  <span class="profile-info-subtitle">{{items['AccNumber']}}</span>
                </b-card-text>
                <b-card-text class="d-flex flex-column border-bottom p-3 flex-sm-row">
                  <h4 class="profile-info-title">БИК банка: </h4>
                  <span class="profile-info-subtitle">{{items['BIC']}}</span>
                </b-card-text>
                <b-card-text class="d-flex flex-column border-bottom p-3 flex-sm-row">
                  <h4 class="profile-info-title">Банк: </h4>
                  <span class="profile-info-subtitle">{{items['BankName']}}</span>
                </b-card-text>
                <b-card-text class="d-flex flex-column border-bottom p-3 flex-sm-row">
                  <h4 class="profile-info-title">Адрес: </h4>
                  <span class="profile-info-subtitle">{{items['Adress']}}</span>
                </b-card-text>
                <b-card-text class="d-flex flex-column border-bottom p-3 flex-sm-row">
                  <h4 class="profile-info-title">Email: </h4>
                  <span class="profile-info-subtitle">{{items['Email']}}</span>
                </b-card-text>
                <b-card-text class="d-flex flex-column border-bottom p-3 flex-sm-row">
                  <h4 class="profile-info-title">Phone: </h4>
                  <span class="profile-info-subtitle">{{items['Phone']}}</span>
                </b-card-text>
                <b-card-text class="d-flex flex-column border-bottom p-3 flex-sm-row">
                  <h4 class="profile-info-title">ФИО руководителя: </h4>
                  <span class="profile-info-subtitle">{{items['DirectorName']}}</span>
                </b-card-text>
                <b-card-text class="d-flex flex-column border-bottom p-3 flex-sm-row">
                  <h4 class="profile-info-title">Должность руководителя: </h4>
                  <span class="profile-info-subtitle">{{items['DirectorPosition']}}</span>
                </b-card-text>
              </b-col>
            </b-row>

            <b-row>
              <b-col cols="12">
                <b-card-text>
<!--                  <h4>Тип: <span>{{ card.type === 1 ? 'безналичная оплата' : 'наличная оплата' }}</span></h4>-->
                </b-card-text>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>

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
    await $axios.$get(`/api/profile/info?id=${id}`).then(res => {
      store.dispatch('breadcrumbs/setBreadcrumbs', {category: `profile`})
      store.dispatch('profile-info/setInfoTableData', res[0] ? res[0] : {})
    })
  },
  computed: {
    items() {
      return this.$store.getters['profile-info/getInfoItems']
    }
  },
  methods: {}
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

