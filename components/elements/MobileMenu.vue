<template>
  <div class="mobile-menu" :class="isActive ? 'active' : null">
    <div class="mobile-menu__content">
      <ul class="mobile-menu__links">
        <li>
          <NuxtLink to="/catalog" class="header-link">
            Каталог
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/news" class="header-link">
            Новости
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="header-link">
            О компании
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contacts" class="header-link">
            Контакты
          </NuxtLink>
        </li>
      </ul>
      <div class="mobile-menu__down">
        <NuxtLink to="/cart" class="links">
          <b-icon icon="cart4" aria-hidden="true"></b-icon>
          {{totalPrice.toFixed(2)}}
        </NuxtLink>
        <NuxtLink v-if="!user.isAuth" to="/login" class="links">
          <b-icon icon="person-lines-fill" aria-hidden="true"></b-icon>
          Вход для партнеров
        </NuxtLink>
        <div v-else class="profile-container">
          <NuxtLink
            to="/profile/orders"
            class="links-small mr-1"
          >
            <b-icon icon="person-lines-fill" scale="2"></b-icon>
          </NuxtLink>
          <a href="#" @click.prevent v-b-modal.modal-logout class="links-small">
            <b-icon icon="person-x-fill" scale="2"></b-icon>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isActive() {
      return this.$store.getters['active-elements/getMobileMenuActive']
    },
    user() {
      return this.$store.getters['auth/getAuthUser']
    },
    totalPrice() {
      return this.$store.getters['cart/getTotalPrice']
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-menu {
  display: none;

  &__content {
    padding-top: 80px;
    padding-bottom: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  &__links {
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      font-size: 16px;
      text-transform: uppercase;
      font-weight: bold;
      padding: 8px;
    }
  }

  &__down {
    width: 100%;
    padding: 5px;

    .links {
      padding: 10px;
      border: 1px solid $border-blue;
      display: block;
      width: 100%;
      margin-bottom: 5px;
      font-size: 14px;
      text-transform: uppercase;
      font-weight: bold;
    }

    .profile-container {
      display: flex;
      justify-content: center;
      width: 100%;

      .links-small {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        border: 1px solid $border-blue;
      }
    }
  }
}

@media (max-width: 991px) {
  .mobile-menu {
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 220px;
    background-color: white;
    z-index: 99;
    transform: translateX(100%);
    transition: transform 0.5s;

    &.active {
      transform: translateX(0%);
    }
  }
}
</style>
