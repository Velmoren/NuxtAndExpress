<!--suppress ALL -->
<template>
  <form class="login-form" @submit.prevent="authLogin">
    <h2 class="login-form__title">
      Вход для партнеров
    </h2>

    <div class="login-form__controls">
      <div class="login-form__controls--top">
        <label for="login-form-name">Логин или E-mail</label>
        <nuxt-link to="/registration">Зарегистрироваться?</nuxt-link>
      </div>
      <input
        type="text"
        id="login-form-name"
        class="login-form__controls--input"
        v-model="login"
      >
    </div>
    <div class="login-form__controls">
      <div class="login-form__controls--top">
        <label for="login-form-pass">Пароль</label>
      </div>
      <input
        type="password"
        id="login-form-pass"
        class="login-form__controls--input"
        autocomplete="true"
        v-model="password"
      >
    </div>

    <div class="login-form__buttons">
      <div class="login-form__buttons--check">
        <input type="checkbox" id="login-form-check">
        <label for="login-form-check">Запомнить меня</label>
      </div>
      <button class="login-form__buttons--submit">
        Вход
      </button>
    </div>
  </form>
</template>

<script>
export default {
  computed: {
    login: {
      get() {
        return this.$store.getters['auth/getAuthUserLogin']
      },
      set(val) {
        this.$store.dispatch('auth/setAuthUserLogin', val)
      }
    },
    password: {
      get() {
        return this.$store.getters['auth/getAuthUserPassword']
      },
      set(val) {
        this.$store.dispatch('auth/setAuthUserPassword', val)
      }
    },
  },
  methods: {
   async authLogin() {
     const login = this.$store.getters['auth/getAuthUserLogin']
      await this.$axios.$get(`/api/auth/login?login=${login}&password=${this.password}`)
        .then(res => {
          this.$store.dispatch('auth/setAuthUserId', res['Client_id'])

          if(res['Access']) {
            this.$store.dispatch('auth/setIsAuth', true)
            this['$cookiz'].set('auth', this.$store.getters['auth/getAuthUser'])
            this['$nuxt'].$router.replace({ path: '/profile/orders'})
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  width: 420px;
  padding: 40px;
  background-color: $back-gray-dark;
  border-radius: 5px;
  border: 2px solid $border-blue;

  &__title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  &__controls {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    &--top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;

      label {
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
      }

      a {
        color: $main-blue;
      }
    }

    &--input {
      border-radius: 5px;
      box-shadow: none;
      border: 1px solid $border-blue;
      background-color: $back-white;
      height: 40px;
      font-size: 14px;
      width: 100%;
      color: $main-blue;
      outline: none;
      padding: 0 10px;
    }
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &--check {
      display: flex;
      align-items: center;

      input {
        display: none;
        &:checked + label {
          &:before {
            content: url(~/assets/images/forms-icons/check.png);
            display: block;
            font-size: 13px;
            text-align: center;
            line-height: 13px;
          }
        }
      }

      label {
        padding-left: 25px;
        position: relative;
        color: $main-blue;
        cursor: pointer;

        &:before {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          top: -1px;
          width: 13px;
          height: 13px;
          background-color: $main-white-text;
          border: 1px solid $border-blue;
          border-radius: 3px;
        }
      }
    }

    &--submit {
      color: $main-white-text;
      background-color: $back-blue;
      border-radius: 5px;
      border: none;
      outline: none;
      box-shadow: none;
      text-transform: uppercase;
      font-weight: bold;
      padding: 13px 25px;
      font-size: 16px;
      cursor: pointer;
    }
  }
}

@media (max-width: 1200px) {
  .login-form {
    width: 380px;

    &__title {
      font-size: 20px;
    }

    &__controls {
      &--top {
        label {
          font-size: 12px;
        }

        a {
          font-size: 12px;
        }
      }
    }

    &__buttons {
      &--submit {
        padding: 10px 20px;
        font-size: 14px;
      }
    }
  }
}

@media (max-width: 991px) {
  .login-form {
    width: 300px;

    &__title {
      font-size: 16px;
    }

    &__controls {
      &--top {
        label {
          font-size: 10px;
        }

        a {
          font-size: 10px;
        }
      }

      &--input {
        height: 30px;
      }
    }

    &__buttons {
      &--check {
        label {
          font-size: 12px;

          &:before {
            top: -3px;
          }
        }
      }
      &--submit {
        padding: 8px 15px;
        font-size: 10px;
      }
    }
  }
}
</style>
