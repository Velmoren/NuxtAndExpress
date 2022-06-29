<template>
  <section class="news">
    <div class="container-custom">
      <div class="news-top">


      </div>
      <div class="news-content">

      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col">
          <breadcrumbs/>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <page-title title="Новости"/>
        </div>
      </div>

      <div class="row">

        <div class="col col-12 col-md-6 col-lg-4 col-xl-3 mb-3 d-flex justify-content-center">
          <nuxt-link
            v-for="item in news" :key="item.id"
            :to="{name: 'news-id', params: {id: item.id}}">
            <b-card
              img-src="~assets/images/news/1.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-sub-title class="mb-2">{{ item.dateEnd }}</b-card-sub-title>
              <b-card-title>{{ item.title }}</b-card-title>
              <b-card-text>
                {{ item.smallText }}
              </b-card-text>
            </b-card>
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
  async fetch({store, $axios}) {
    store.dispatch('breadcrumbs/setBreadcrumbs', {category: 'news'})

    await $axios.$get(`/api/news`).then(res => {
      store.dispatch('news/setNews', res['MarketAction'])
    })
  },
  computed: {
    news() {
      return this.$store.getters['news/getNews']
    }
  }
}
</script>

<style lang="scss" scoped>
.news {

  .card-title {
    font-size: 20px;
    font-weight: bold;
  }

  &-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: auto;
    margin-bottom: 30px;
    border-radius: 5px;
    border: 2px solid $border-blue;
    overflow: hidden;
    background-color: $back-white;

    &__image {
      img {
        max-width: 100%;
      }
    }

    &__date {
      width: 100%;
      padding: 5px;
    }

    &__title {
      padding: 5px;

      a {
        width: 100%;
        font-size: 20px;
        font-weight: bold;

        &:hover {
          opacity: 0.7;
        }
      }
    }

    &__description {
      width: 100%;
      padding: 5px;
    }
  }
}

@media (max-width: 1200px) {
  .news {
    &-item {
      width: 280px;
      height: 300px;
    }
  }
}

@media (max-width: 991px) {
  .news {
    &-content {
      justify-content: space-around;
    }
  }
}
</style>
