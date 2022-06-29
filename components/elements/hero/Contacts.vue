<template>
  <div class="contacts">
    <div class="contacts-item">
      <div class="contacts-item__icon">
        <div class="contacts-item__icon--icon icon"></div>
        <div class="contacts-item__icon--text text">телефоны</div>
      </div>
      <div class="contacts-item__text">
        <a :href="`tel:${contacts.tel}`">{{contacts.tel}}</a>
        <a :href="`tel:${contacts.tel1}`">{{contacts.tel1}}</a>
      </div>
    </div>
    <div class="contacts-item">
      <div class="contacts-item__icon">
        <div class="contacts-item__icon--icon icon"></div>
        <div class="contacts-item__icon--text text">адрес</div>
      </div>
      <div class="contacts-item__text">
        <span>{{contacts.post_adress}}</span>
      </div>
    </div>
    <div class="contacts-item">
      <div class="contacts-item__icon">
        <div class="contacts-item__icon--icon icon"></div>
        <div class="contacts-item__icon--text text">работаем</div>
      </div>
      <div class="contacts-item__text">
        <span>ПН-ПТ 09:00-17:00</span>
      </div>
    </div>
    <div class="contacts-item">
      <div class="contacts-item__icon">
        <div class="contacts-item__icon--icon icon"></div>
        <div class="contacts-item__icon--text text">e-mail</div>
      </div>
      <div class="contacts-item__text">
        <a :href="`mailto:${contacts.email}`">{{contacts.email}}</a>
      </div>
    </div>
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
.contacts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &-item {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 5px;

    &__icon {
      width: 56px;
      height: 56px;
      margin-right: 10px;
      border-radius: 5px;
      background-color: $main-blue-dark;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &--icon {
        width: 20px;
        height: 20px;
        margin-bottom: 5px;
      }

      &--text {
        font-size: 10px;
        color: $main-white-text;
      }
    }

    &__text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      a, span {
        color: $main-white-text;
        max-width: 170px;
        line-height: 20px;
      }

      a:hover {
        opacity: 0.7;
      }
    }

    &:nth-child(1) {
      .icon {
        background-image: url(~assets/images/phone.svg);
        background-size: contain;
        background-repeat: no-repeat;
      }
    }

    &:nth-child(2) {
      .icon {
        background-image: url(~assets/images/map-marker.svg);
        background-size: contain;
        background-repeat: no-repeat;
      }
    }

    &:nth-child(3) {
      .icon {
        background-image: url(~assets/images/calendar.svg);
        background-size: contain;
        background-repeat: no-repeat;
      }
    }

    &:nth-child(4) {
      .icon {
        background-image: url(~assets/images/email.svg);
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
  }
}

@media (max-width: 1400px) {

}

@media (max-width: 1200px) {
  .contacts {
    &-item {
      &__icon {
        width: 45px;
        height: 45px;

        &--icon {
          width: 15px;
          height: 15px;
        }

        &--text {
          font-size: 8px;
        }
      }

      &__text {
        span {
          width: 150px;
        }
        a, span {
          font-size: 12px;
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .contacts {
    &-item {
      &__icon {
        width: 40px;
        height: 40px;

        &--icon {
          width: 15px;
          height: 15px;
        }

        &--text {
          font-size: 6px;
        }
      }

      &__text {
        span {
          width: 130px;
        }
        a, span {
          font-size: 10px;
          line-height: 14px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .contacts {
    &-item {
      flex-direction: row-reverse;

      &__icon {
        margin-right: 0;
        margin-left: 10px;
      }

      &__text {
        span, a {
          text-align: right;
        }
      }
    }
  }
}
</style>
