<template>
  <div class="footer">
    <b-container>
      <b-row class="mb-3">
        <b-col cols="12" md="4" lg="2"
               class="d-flex flex-row flex-md-column justify-content-between justify-content-md-start mb-5 mb-md-0">
          <NuxtLink to="/catalog" class="footer-nav-link mb-0 mb-md-2">
            Каталог
          </NuxtLink>
          <NuxtLink to="/news" class="footer-nav-link mb-0 mb-md-2">
            Новости
          </NuxtLink>
          <NuxtLink to="/about" class="footer-nav-link mb-0 mb-md-2">
            О компании
          </NuxtLink>
          <NuxtLink to="/contacts" class="footer-nav-link">
            Контакты
          </NuxtLink>
        </b-col>

        <b-col cols="6" md="4" lg="3" class="d-flex flex-column">
          <div class="footer-description-item d-flex flex-column mb-3">
            <strong class="mb-1">Адрес</strong>
            <span>{{ contacts.post_adress }}</span>
          </div>

          <div class="footer-description-item d-flex flex-column mb-3">
            <strong class="mb-1">ВРЕМЯ РАБОТЫ</strong>
            <span>пн.-пт. 09:00-17:00</span>
          </div>

          <div class="footer-description-item d-flex flex-column mb-3">
            <strong class="mb-1">УНП</strong>
            <span>191782513 от 20.06.2006 г</span>
          </div>
        </b-col>

        <b-col cols="6" md="4" lg="3" class="d-flex flex-column text-right text-lg-left">
          <div class="footer-description-item d-flex flex-column mb-3">
            <strong class="mb-1">ТЕЛЕФОНЫ</strong>
            <a :href="`tel:${contacts.tel}`" class="mb-1">{{ contacts.tel }}</a>
            <a :href="`tel:${contacts.tel1}`">{{ contacts.tel1 }}</a>
          </div>

          <div class="footer-description-item d-flex flex-column mb-3">
            <strong class="mb-1">E-MAIL</strong>
            <a :href="`mailto:${contacts.email}`">{{ contacts.email }}</a>
          </div>
        </b-col>

        <b-col
          cols="12"
          md="6"
          lg="2"
          class="d-flex flex-row flex-md-column justify-content-between justify-content-lg-start align-items-end align-items-lg-start"
        >
          <b-button size="sm" variant="outline-info" class="mb-2">
            <b-icon class="footer-pdf_icon" aria-hidden="true"></b-icon>
            каталог
          </b-button>
          <b-button size="sm" variant="outline-info" class="mb-2">
            <b-icon class="footer-doc_icon" aria-hidden="true"></b-icon>
            прайс-лист
          </b-button>
        </b-col>
        <b-col
          cols="12"
          md="6"
          lg="2"
          class="d-flex flex-row flex-md-column justify-content-between justify-content-lg-start align-items-end align-items-lg-start"
        >
          <b-button size="sm" variant="outline-info" class="mb-2">
            ENG
          </b-button>
          <b-button size="sm" variant="outline-info" class="mb-2">
            РУС
          </b-button>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
          <div class="footer-payment-block p-1">
            <div class="footer-payment-block__item item-1">
              <img src="@/assets/images/logos-payment/visa.svg" alt="">
            </div>
            <div class="footer-payment-block__item item-2">
              <img src="@/assets/images/logos-payment/maestro.svg" alt="">
            </div>
            <div class="footer-payment-block__item item-3">
              <img src="@/assets/images/logos-payment/belcard-squire.png" alt="">
            </div>
            <div class="footer-payment-block__item item-4">
              <img src="@/assets/images/logos-payment/mastercard.svg" alt="">
            </div>
            <div class="footer-payment-block__item item-5">
              <img src="@/assets/images/logos-payment/erip.png" alt="">
            </div>
          </div>
        </b-col>
        <b-col class="text-center text-md-right">
          © 2017 Все права защищены. ООО "СтандартКонтакт"
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  computed: {
    contacts() {
      return this.$store.getters['contacts/getContacts']
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  flex: 0 0 auto;
  padding: 15px 0;
  background-color: $main-blue-dark;
  color: $main-blue-light;

  &-nav-link {
    color: $main-blue-light;
    font-weight: bold;

    &:hover {
      color: lighten($main-blue-light, 10%);
    }
  }

  &-description {
    &-item {
      strong {
        font-weight: bold;
      }

      a {
        color: $main-blue-light;

        &:hover {
          color: lighten($main-blue-light, 10%);
        }
      }
    }
  }

  &-pdf_icon {
    background-image: url(~assets/images/pdf.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }

  &-doc_icon {
    background-image: url(~assets/images/document.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }

  &-payment-block {
    display: flex;
    width: max-content;
    padding: 5px 0;
    box-shadow: 0 0 10px rgb(0 0 0 / 50%);
    border-radius: 5px;

    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 10px;

      &.item-1 {
        width: 60px;

        img {
          height: 30px;
          width: 60px;
          object-fit: cover;
          max-width: none;
        }
      }

      &.item-2 {
        width: 50px;

        img {
          height: 30px;
          width: 50px;
          object-fit: cover;
          max-width: none;
        }
      }

      &.item-3 {
        width: 30px;

        img {
          height: 30px;
          width: 30px;
          object-fit: cover;
          max-width: none;
        }
      }

      &.item-4 {
        width: 50px;

        img {
          height: 30px;
          width: 50px;
          object-fit: cover;
          max-width: none;
        }
      }

      &.item-5 {
        width: 75px;

        img {
          height: 25px;
          width: 75px;
          object-fit: cover;
          max-width: none;
        }
      }
    }
  }

  @media (max-width: 430px) {
    &-payment-block {
      &__item {
        &.item-1 {
          width: 40px;
          img {
            height: 20px;
            width: 40px;
          }
        }

        &.item-2 {
          width: 30px;
          img {
            height: 20px;
            width: 30px;
          }
        }

        &.item-3 {
          width: 20px;
          img {
            height: 20px;
            width: 20px;
          }
        }

        &.item-4 {
          width: 30px;
          img {
            height: 20px;
            width: 30px;
          }
        }

        &.item-5 {
          width: 55px;
          img {
            height: 15px;
            width: 55px;
          }
        }
      }
    }
  }
}
</style>
