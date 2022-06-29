<template>
  <b-button-group size="sm" class="btn-profile-wrapper">
    <router-link to="/profile/orders" custom v-slot="{ navigate, isActive }">
      <b-button
        variant="primary"
        class="btn-profile"
        :class="isActive ? 'active-btn' : null"
        @click="navigate"
        @keypress.enter="navigate"
      >Заказы</b-button>
    </router-link>
    <router-link to="/profile/shipments" custom v-slot="{ navigate, isActive }">
      <b-button
        variant="primary"
        class="btn-profile"
        :class="isActive ? 'active-btn' : null"
        @click="navigate"
        @keypress.enter="navigate"
      >Отгрузки</b-button>
    </router-link>
    <router-link to="/profile/payments" custom v-slot="{ navigate, isActive }">
      <b-button
        variant="primary"
        class="btn-profile"
        :class="isActive ? 'active-btn' : null"
        @click="navigate"
        @keypress.enter="navigate"
      >Платежи</b-button>
    </router-link>
    <router-link to="/profile/info" custom v-slot="{ navigate, isActive }">
      <b-button
        variant="primary"
        class="btn-profile"
        :class="isActive ? 'active-btn' : null"
        @click="navigate"
        @keypress.enter="navigate"
      >Информация</b-button>
    </router-link>
  </b-button-group>
</template>

<script>
export default {
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.btn-profile {
  font-size: 14px;

  &-wrapper {
    height: 100%;
  }

  &.active-btn {
    background-color: $back-gray-light !important;
    color: $main-blue-dark;
  }
}
@media (max-width: 1200px) {
  .personal-area {
    .btn-profile {
      font-size: 12px;
    }
  }
}

@media (max-width: 576px) {
  .personal-area {
    .btn-profile {
      font-size: 12px;
    }
  }
}
</style>
