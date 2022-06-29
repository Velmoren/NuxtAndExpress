<template>
  <div class="characteristics-table">
    <div class="characteristics-table__header">
      <div class="characteristics-table__header--item th-1">
        ТОВАР
      </div>
      <div class="characteristics-table__header--item th-2">
        ОПИСАНИЕ
      </div>
      <div class="characteristics-table__header--item th-3">
        СТАНДАРТ
      </div>
      <div class="characteristics-table__header--item th-4">
        РАЗМЕР
      </div>
      <div class="characteristics-table__header--item th-5">
        МАТЕРИАЛ
      </div>
      <div class="characteristics-table__header--item th-6">
        ПОКРЫТИЕ
      </div>
      <div class="characteristics-table__header--item th-7">
        УПАКОВКА (ШТ)
      </div>
      <div class="characteristics-table__header--item th-8">
        ЦЕНА <br> (ЗА 100ШТ) <br> БЕЗ НДС
      </div>
      <div class="characteristics-table__header--item th-9">
        СТАТУС
      </div>
      <div class="characteristics-table__header--item th-10">
        В КОРЗИНУ
      </div>
    </div>
    <div class="characteristics-table__body" v-if="!notFoundGoods">
      <div
        class="characteristics-table__body-row"
        v-for="row in tableItems"
        :key="row.barcode"
      >
        <div class="characteristics-table__body-row--item th-1">
          {{row.name}}
        </div>
        <div class="characteristics-table__body-row--item th-2">

        </div>
        <div class="characteristics-table__body-row--item th-3">
          {{row.TYPE}} {{row.VALUE}}
        </div>
        <div class="characteristics-table__body-row--item th-4">
          {{row.dimA}} x {{row.dimB}}
        </div>
        <div class="characteristics-table__body-row--item th-5">

        </div>
        <div class="characteristics-table__body-row--item th-6">

        </div>
        <div class="characteristics-table__body-row--item th-7">
          {{row.pack}} шт
        </div>
        <div class="characteristics-table__body-row--item th-8">
          {{row.price}}
        </div>
        <div class="characteristics-table__body-row--item th-9">
          {{row.quantity}}
        </div>
        <div class="characteristics-table__body-row--item th-10">
          <b-button size="sm" variant="primary" @click="addItemInCart(row)">
            <b-icon icon="cart-plus" aria-hidden="true"></b-icon>
          </b-button>
        </div>
      </div>
    </div>
    <b-jumbotron class="mt-2" v-if="notFoundGoods">
      <p>Товар отсутствует</p>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  computed: {
    tableItems() {
      return this.$store.getters['checked-good/getGoods']
    },
    notFoundGoods() {
      return this.$store.getters['checked-good/getNotFoundGoods']
    }
  },
  methods: {
    addItemInCart(item) {
      this.$store.dispatch('cart/setCartItem', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.characteristics-table {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 64px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow: hidden;

    &--item {
      border: 1px solid $border-tables;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: $main-blue;
      font-size: 10px;
      font-weight: bold;
      font-family: Arial, sans-serif;
      background-color: $back-gray-dark;

      &.th-1 {
        width: 13%
      }

      &.th-2 {
        width: 15%
      }

      &.th-3 {
        width: 8%
      }

      &.th-4 {
        width: 8%
      }

      &.th-5 {
        width: 10%
      }

      &.th-6 {
        width: 10%
      }

      &.th-7 {
        width: 10%
      }

      &.th-8 {
        width: 8%
      }

      &.th-9 {
        width: 10%
      }

      &.th-10 {
        width: 8%
      }

      &:not(:last-child) {
        border-right: none;
      }
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow: hidden;
    //min-height: 460px;

    &-row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 46px;

      &--item {
        border: 1px solid $border-tables;
        border-top: none;
        border-right: none;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: $main-black-text;
        background-color: $back-white;
        font-size: 12px;
        font-weight: bold;
        font-family: Arial, sans-serif;

        &.th-1 {
          width: 13%
        }

        &.th-2 {
          width: 15%
        }

        &.th-3 {
          width: 8%
        }

        &.th-4 {
          width: 8%
        }

        &.th-5 {
          width: 10%
        }

        &.th-6 {
          width: 10%
        }

        &.th-7 {
          width: 10%
        }

        &.th-8 {
          width: 8%
        }

        &.th-9 {
          width: 10%
        }

        &.th-10 {
          width: 8%
        }

        &:not(:last-child) {
          border-right: none;
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .characteristics-table {
    &__header {
      &--item {
        font-size: 8px;
      }
    }

    &__body {
      &-row {
        &--item {
          font-size: 10px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .characteristics-table {
    &__header {
      &--item {
        font-size: 7px;
      }
    }

    &__body {
      &-row {
        &--item {
          font-size: 8px;
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .characteristics-table {
    &__header {
      flex-wrap: wrap;
      height: 50px;
      border-radius: 5px;
      border: 1px solid $border-blue;

      &--item {
        height: 50%;

        &.th-1 {
          width: 25%
        }

        &.th-2 {
          width: 25%
        }

        &.th-3 {
          width: 25%
        }

        &.th-4 {
          width: 25%
        }

        &.th-5 {
          width: 25%
        }

        &.th-6 {
          width: 25%
        }

        &.th-7 {
          width: 25%
        }

        &.th-8 {
          width: 25%
        }

        &.th-9 {
          display: none;
        }

        &.th-10 {
          display: none;
        }
      }
    }

    &__body {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      &-row {
        flex-wrap: wrap;
        height: 75px;
        margin-top: 5px;
        border-radius: 5px;
        overflow: hidden;
        border: 1px solid $border-blue;

        &--item {
          height: 25px;

          &.th-1 {
            width: 25%
          }

          &.th-2 {
            width: 25%
          }

          &.th-3 {
            width: 25%
          }

          &.th-4 {
            width: 25%
          }

          &.th-5 {
            width: 25%
          }

          &.th-6 {
            width: 25%
          }

          &.th-7 {
            width: 25%
          }

          &.th-8 {
            width: 25%
          }

          &.th-9 {
            width: 50%
          }

          &.th-10 {
            width: 50%;

            button {
              padding: 1px 15px;
              font-size: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
