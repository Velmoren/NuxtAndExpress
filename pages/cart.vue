<template>
  <section class="cart">
    <b-container>
      <b-row>
        <b-col>
          <breadcrumbs/>
          <page-title title="Корзина"/>
        </b-col>
      </b-row>
    </b-container>
    <b-container v-if="items.length > 0">
      <b-row class="mb-1">
        <b-col class="d-flex flex-column align-items-end">
          <b-button size="sm" variant="primary" @click="clearCartItems">
            <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
            ОЧИСТИТЬ ВСЮ КОРЗИНУ
          </b-button>
        </b-col>
      </b-row>
      <b-row v-if="$mq === 'desktop' || $mq === 'desktopSm'">
        <b-col>
          <b-table
            class="cart-table"
            head-variant="light"
            table-variant="light"
            bordered
            :items="items"
            :fields="fields"
            table-class="profile-table"
          >
            <template #cell(nds)="data">
              {{ data.item.nds + '%' }}
            </template>
            <template #cell(nds_pack)="data">
              {{ data.item.nds_pack.toFixed(2) }}
            </template>
            <template #cell(total_nds)="data">
              {{ data.item.total_nds.toFixed(2) }}
            </template>
            <template #cell(quantity)="data">
              <div class="cart-count">
                <b-button size="sm" variant="primary" @click="decCount(data.item.barcode)">
                  <b-icon icon="dash" aria-hidden="true"></b-icon>
                </b-button>
                <label>
                  <input
                    class="cart-count-input"
                    type="number"
                    :value="data.item.quantity"
                    @input="changeCount($event.target.value, data.item.barcode)"
                  >
                </label>
                <b-button size="sm" variant="primary" @click="incCount(data.item.barcode)">
                  <b-icon icon="plus" aria-hidden="true"></b-icon>
                </b-button>
              </div>
            </template>
            <template #cell(total)="data">
              {{ data.item.total.toFixed(2) }}
            </template>

            <template #cell(delete)="data">
              <b-button
                size="sm"
                variant="primary"
                @click="deleteItem(data.item.barcode)"
              >
                <b-icon icon="trash" aria-hidden="true"></b-icon>
              </b-button>
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
              <div class="d-flex justify-content-between align-items-center text-center">
                <span>{{ card['standartName'] }}</span>
              </div>
            </template>
            <b-row>
              <b-col cols="12" sm="4" md="12" class="mb-3">
                <b-card-text>
                  <span>Вес: {{ card.weight }}</span>
                </b-card-text>
              </b-col>
              <b-col cols="12" sm="4" md="12" class="mb-3">
                <b-card-text>
                  <span>ЦЕНА ЗА 100ШТ: {{ card.price_pack.toFixed(2) }}</span>
                </b-card-text>
              </b-col>
              <b-col cols="12" sm="4" md="12" class="mb-3">
                <b-card-text>
                  <span>СТАВКА НДС: {{ card.nds.toFixed(2) }}%</span>
                </b-card-text>
              </b-col>
              <b-col cols="12" sm="4" md="12" class="mb-3">
                <b-card-text>
                  <span>НДС: {{ card.nds_pack.toFixed(2) }}</span>
                </b-card-text>
              </b-col>
              <b-col cols="12" sm="4" md="12" class="mb-3">
                <b-card-text>
                  <span>ЦЕНА С НДС: {{ card.total_nds.toFixed(2) }}</span>
                </b-card-text>
              </b-col>
              <b-col cols="12" sm="4" md="12" class="mb-3">
                <b-card-text>
                  <span>Итого: {{ card.total.toFixed(2) }}</span>
                </b-card-text>
              </b-col>
            </b-row>

            <template #footer>
              <b-row>
                <b-col cols="8" class="d-flex justify-content-start align-items-center">
                  <div class="cart-count">
                    <b-button size="sm" variant="primary" @click="decCount(card.barcode)">
                      <b-icon icon="dash" aria-hidden="true"></b-icon>
                    </b-button>
                    <label>
                      <input
                        class="cart-count-input"
                        type="number"
                        :value="card.quantity"
                        @input="changeCount($event.target.value, card.barcode)"
                      >
                    </label>
                    <b-button size="sm" variant="primary" @click="incCount(card.barcode)">
                      <b-icon icon="plus" aria-hidden="true"></b-icon>
                    </b-button>
                  </div>
                </b-col>
                <b-col cols="4" class="d-flex justify-content-center align-items-center">
                  <b-button
                    size="sm"
                    variant="primary"
                    v-b-modal.modal-orders-details
                    @click="deleteItem(card.barcode)"
                  >
                    <b-icon icon="trash" aria-hidden="true"></b-icon>
                  </b-button>
                </b-col>
              </b-row>
            </template>
          </b-card>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="d-flex flex-column align-items-end min-price">
          <span class="min-price-subtitle mb-2">Минимальная сумма заказа {{minPrice}} руб</span>
          <p class="min-price-title">Общая сумма заказа: {{ totalPrice }} руб</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <hr class="border-white">
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" lg="4">
          <cart-comments/>
        </b-col>
        <b-col cols="12" lg="4">
          <cart-delivery/>
        </b-col>
        <b-col cols="12" lg="4">
         <cart-payment/>
        </b-col>
      </b-row>
      <b-row class="pb-5">
        <b-col class="d-flex flex-column align-items-end">
          <b-button variant="primary" @click="submitCart">
            <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
            Отправить
          </b-button>
        </b-col>
      </b-row>
    </b-container>
    <b-container v-else>
      <b-row>
        <b-col>
          <b-jumbotron class="mt-2" lead="Ваша корзина пуста"/>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import PageTitle from "@/components/UI/PageTitle";
import CartComments from "@/components/UI/forms/CartComments";
import CartDelivery from "@/components/UI/forms/CartDelivery";
import CartPayment from "@/components/UI/forms/CartPayment";

export default {
  middleware: ['isAuth', 'cookieCart', 'isOpenMobileMenu'],
  components: {Breadcrumbs, PageTitle, CartComments, CartDelivery, CartPayment},
  async fetch({store, $axios}) {
    store.dispatch('breadcrumbs/setBreadcrumbs', {category: 'cart'})
    await $axios.$get(`/api/cart/min-price-order`).then(res => {
      store.dispatch('cart/setMinPrice', res['OrderMinPrice'])
    })
  },
  computed: {
    items() {
      return this.$store.getters['cart/getCartItems'].items
    },
    fields() {
      return this.$store.getters['cart/getCartItems'].fields
    },
    totalPrice() {
      return this.$store.getters['cart/getTotalPrice']
    },
    minPrice() {
      return this.$store.getters['cart/getMinPrice']
    }
  },
  methods: {
    clearCartItems() {
      this.$store.dispatch('cart/setClearCart')
    },
    incCount(id) {
      this.$store.dispatch('cart/setIncCount', id)
    },
    decCount(id) {
      this.$store.dispatch('cart/setDecCount', id)
    },
    changeCount(value, id) {
      this.$store.dispatch('cart/setChangeCount', {value: +value, id})
    },
    deleteItem(id) {
      if(confirm('Хотите удалить товар?')) {
        this.$store.dispatch('cart/setDeleteItem', id)
      }
    },
    async submitCart() {
      const data = {
        Client_id: this.$store.getters['auth/getAuthUserId'],
        Comment: this.$store.getters['cart/getCommentValue'],
        delivery: this.$store.getters['cart/getDeliveryValue'],
        deliveryAddresses: this.$store.getters['cart/getAdressValue'],
        payment: this.$store.getters['cart/getPaymentValue'],
        goods: this.items
      }
      if (this.totalPrice >= this.minPrice) {
        await this.$axios.$post(`/api/cart/add-order`, {data}).then(res => {
          this.clearCartItems()

          this.$bvModal.msgBoxOk(`Ваша заявка отправлена!`, {
            title: 'Спасибо!',
            buttonSize: 'sm',
            okVariant: 'info',
            centered: true,
            size: 'sm'
          })
        })
      } else {
        this.$bvModal.msgBoxOk(`Минимальная цена ${this.minPrice}руб!`, {
          title: 'Внимание!',
          buttonSize: 'sm',
          okVariant: 'info',
          centered: true,
          size: 'sm'
        })
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.cart {
  .table th, .table td {
    vertical-align: middle;
  }
}

.min-price {
  //padding-bottom: 10px;
  //border-bottom: 1px solid white;

  &-title {
    font-weight: 700;
    font-size: 20px;
    color: $main-white-text;
  }

  &-subtitle {
    font-size: 12px;
    color: $main-white-text;
  }
}

.cart-count {
  display: flex;
  align-items: center;
  justify-content: center;

  &-input {
    border: 1px solid rgb(96, 141, 152);
    border-radius: 5px;
    max-width: 50px;
    height: 25px;
    margin: 0 5px;
    text-align: center;
  }

  button {
    border-radius: 50%;
    padding: 2px;
    line-height: 1;
  }
}
</style>
