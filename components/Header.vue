<template>
  <div class="header">
    <b-container class="h-100">
      <div class="header-box" >
        <div class="header-logo">
          <NuxtLink to="/" class="header-logo__back">
          </NuxtLink>
        </div>
        <nav class="header-nav">
          <ul>
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
        </nav>
        <div class="header-special">
          <NuxtLink
            to="/search"
            class="header-search header-link d-flex justify-content-center"
          >
            <b-icon icon="search" scale="1.5"></b-icon>
          </NuxtLink>
          <NuxtLink to="/cart" class="header-cart header-link" :class="user.isAuth ? 'big' : 'small'">
            <b-icon icon="cart-fill" scale="1.5"></b-icon>
            <span>{{totalPrice.toFixed(2)}}</span>
          </NuxtLink>
          <NuxtLink
            to="/login"
            class="header-login header-link"
            v-if="!user.isAuth"
          >
            Вход для партнеров
          </NuxtLink>
          <template v-else>
            <NuxtLink
              to="/profile/orders"
              class="header-profile header-link d-flex justify-content-center"
            >
              <b-icon icon="person-lines-fill" scale="2"></b-icon>
            </NuxtLink>
            <a
              href="#"
              @click.prevent
              v-b-modal.modal-logout
              class="header-profile header-link d-flex justify-content-center"
            >
              <b-icon icon="person-x-fill" scale="2"></b-icon>
            </a>
          </template>
        </div>

        <div class="header-controls">
          <phone-button/>
          <cart-button :cartItemsLength="getCartItemsLength"/>
          <burger/>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>

import Burger from '@/components/UI/buttons/Burger'
import CartButton from "@/components/UI/buttons/CartButton";
import PhoneButton from "./UI/buttons/PhoneButton";

export default {
  middleware: 'isAuth',
  components: {Burger, CartButton, PhoneButton},
  computed: {
    user() {
      return this.$store.getters['auth/getAuthUser']
    },
    totalPrice() {
      return this.$store.getters['cart/getTotalPrice']
    },
    getCartItemsLength() {
      return this.$store.getters['cart/getCartItemsLength']
    }
  },
  methods: {
    logger() {

    },
    logout() {
      if(confirm('logout?')) {
        alert('logout')
      } else {
        alert('not logout')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: white;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  height: 65px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  &-box {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-logo {
    width: 280px;
    height: 100%;

    &__back {
      background-image: url(~assets/images/logo.png);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
  }

  &-nav {
    height: 100%;

    ul {
      height: 100%;
      display: flex;
    }
  }

  &-special {
    display: flex;
    height: 100%;
  }

  a {
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    text-transform: uppercase;
    font-weight: bold;
  }

  &-link {
    &:hover {
      background: linear-gradient(to bottom, $main-blue-dark 8%, lighten($main-blue, 40%) 8%, lighten($main-blue, 40%) 92%);
    }

    &.nuxt-link-active {
      background: linear-gradient(to bottom, $main-blue-dark 8%, lighten($main-blue, 40%) 8%, lighten($main-blue, 40%) 92%);
    }
  }

  &-search {
    width: 50px;
    border-left: 1px solid lighten($main-blue, 10%);
    border-right: 1px solid lighten($main-blue, 10%);
  }

  &-cart {
    border-right: 1px solid lighten($main-blue, 10%);

    &.small {
      width: 130px;
    }

    &.big {
      width: 195px;
    }

    span {
      height: 100%;
      padding-left: 10px;
      display: flex;
      align-items: center;
    }
  }
  &-login {
    border-right: 1px solid lighten($main-blue, 10%);
  }
  &-profile {
    min-width: 60px;
    border-right: 1px solid lighten($main-blue, 10%);
  }

  &-controls {
    display: none;
    justify-content: flex-end;
    align-items: center;
  }
}

@media (max-width: 1400px) {
  .header {
    height: 60px
  }
}

@media (max-width: 1200px) {
  .header {
    height: 50px;

    &-logo {
      width: 220px;
    }

    &-search {
      width: 40px;

      span {
        background-size: 15px;
      }
    }

    &-cart {
      width: 100px;

      &.big {
        width: 140px;
      }

      span {
        background-size: 15px;
        padding-left: 20px;
        font-size: 12px;
      }
    }

    a {
      font-size: 12px;
    }
  }
}

@media (max-width: 991px) {
  .header {
    //height: 40px;
    &-nav {
      display: none;
    }

    &-special {
      display: none;
    }
    &-logo {
      width: 180px;
    }

    &-search {
      width: 30px;

      span {
        background-size: 10px;
      }
    }

    &-cart {
      width: 80px;
      span {
        font-size: 10px;
        padding-left: 15px;
        background-size: 10px;
      }
    }

    a {
      font-size: 10px;
      padding-left: 5px;
      padding-right: 5px;
    }

    &-controls {
      display: flex;
    }
  }
}

@media (max-width: 768px) {
  .container {
    width: 97%;
    max-width: 100%;
  }
  .header {
    &-nav {
      display: none;
    }

    &-logo {
      //width: 140px;
    }

    &-special {
      display: none;
    }
  }
}
</style>
