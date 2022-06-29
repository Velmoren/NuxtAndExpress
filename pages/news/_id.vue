<template>
  <section class="news-item">
    <div class="container">
      <div class="row">
        <div class="col">
          <breadcrumbs/>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <page-title :title="checkedItem.title"/>
        </div>
      </div>

      <div class="row pb-5">
        <div class="col col-12 col-lg-9">
          <div class="news-item__image">
            <img src="~assets/images/news/1.jpg" alt="1">
          </div>
          <h1 class="news-item__title">
            {{ checkedItem.title }}
          </h1>
          <p class="news-item__text">
            {{ checkedItem.text }}
          </p>
        </div>
        <div class="col col-12 col-lg-3 d-none d-lg-block">
          <h2 class="news-item-sidebar__title">Последние новости</h2>

          <div class="news-item-sidebar__item" v-for="item in news" :key="item.id">
                  <span class="news-item-sidebar__item--date">
                    {{ item.dateEnd }}
                  </span>
            <h2 class="news-item-sidebar__item--title">
              <nuxt-link :to="{name: 'news-id', params: {id: item.id}}">
                {{ item.title }}
              </nuxt-link>
            </h2>
            <p class="news-item-sidebar__item--text">
              {{ item.smallText }}
            </p>
          </div>

          <nuxt-link class="news-item-sidebar__btn" to="/news">
            Все новости
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import PageTitle from "@/components/UI/PageTitle";

export default {
  middleware: ['isAuth', 'isOpenMobileMenu'],
  components: {Breadcrumbs, PageTitle},
  async fetch({params, store, $axios}) {
    await $axios.$get(`/api/news`).then(res => {
      store.dispatch('breadcrumbs/setBreadcrumbs', {
        category: `news`,
        item: res['MarketAction'][params.id]['MarketActionName']
      })
      store.dispatch('news/setCheckedItem', res['MarketAction'][params.id])
      store.dispatch('news/setNews', res['MarketAction'])
    })
  },
  computed: {
    checkedItem() {
      return this.$store.getters['news/getCheckedNews']
    },
    news() {
      return this.$store.getters['news/getNews']
    }
  }
}
</script>

<style lang="scss" scoped>
.news-item {
  &-sidebar {
    &__title {
      font-size: 14px;
      text-transform: uppercase;
      color: $main-white-text;
      margin-bottom: 30px;
    }

    &__item {
      display: flex;
      border-radius: 5px;
      flex-direction: column;
      align-items: flex-start;
      background-color: darken($sections-background-blue, 10%);
      border: 1px solid $border-blue;
      padding: 10px;
      margin-bottom: 10px;

      &--date {
        color: $main-white-text;
        margin-bottom: 10px;
      }

      &--title {
        margin-bottom: 10px;
        text-decoration: underline;

        a {
          color: $main-white-text;
          font-size: 16px;
          transition: .3s;

          &:hover {
            color: $main-blue;
          }
        }
      }

      &--text {
        color: $main-white-text;
      }
    }

    &__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 40px;
      text-align: center;
      background-color: $back-buttons;
      border-radius: 10px;
      color: $main-white-text;
      text-transform: uppercase;
      border: 1px solid $border-blue;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  &__image {
    margin-bottom: 20px;

    img {
      border: 2px solid $border-blue;
      border-radius: 5px;
      max-width: 100%;
    }
  }

  &__title {
    font-size: 24px;
    font-style: italic;
    margin-bottom: 20px;
    line-height: 32px;
    color: $main-white-text;
  }

  &__text {
    font-size: 16px;
    line-height: 28px;
    color: $main-white-text;
  }

  @media (max-width: 991px) {
    &__title {
      font-size: 22px;
    }

    &__text {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 576px) {
    &__title {
      font-size: 18px;
    }

    &__text {
      font-size: 14px;
      line-height: 20px;
    }
  }

  @media (max-width: 430px) {
    &__title {
      font-size: 14px;
    }
  }
}
</style>
