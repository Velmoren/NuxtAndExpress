<template>
  <section class="catalog">
    <div class="container-custom">
      <div class="catalog-top">
        <breadcrumbs/>
        <page-title title="Каталог"/>
      </div>
      <div class="catalog-content">
        <nuxt-link
          class="catalog-item"
          v-for="category in categories"
          :key="category.id"
          :to="category.link"
          :style="backImage(category.image)"
        >
          <h3 class="catalog-item__text">
            {{category.text}}
          </h3>
        </nuxt-link>
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
  fetch({store}) {
    store.dispatch('breadcrumbs/setBreadcrumbs', {category: 'catalog'})
  },
  computed: {
    categories() {
      return this.$store.getters['categories/getCategories']
    },
  },
  methods: {
    backImage(img) {
      return {backgroundImage: `url(${require('~/assets/images/categoryIcons/' + img)})`}
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  &-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &-item {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 425px;
    height: 100px;
    margin-bottom: 30px;
    border: 2px solid $border-blue;
    border-radius: 5px;
    background-repeat: no-repeat;
    background-size: 60px;
    background-position: 5% 50%;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    &__text {
      width: 320px;
      color: $back-white;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 16px;
      padding: 20px;
    }
  }
}

@media (max-width: 1400px) {
  .catalog {
    &-item {
      width: 370px;

      &__text {
        width: 280px;
      }
    }
  }
}

@media (max-width: 1200px) {
  .catalog {
    &-item {
      width: 300px;
      height: 80px;
      background-size: 50px;

      &__text {
        width: 230px;
        font-size: 14px;
      }
    }
  }
}

@media (max-width: 991px) {
  .catalog {
    &-item {
      width: 220px;
      height: 70px;
      background-size: 40px;

      &__text {
        width: 170px;
        font-size: 10px;
        padding: 15px;
      }
    }
  }
}

@media (max-width: 768px) {
  .catalog {
    &-content {
      flex-direction: column;
      align-items: center;
    }

    &-item {
      margin-bottom: 10px;

      &__text {

      }
    }
  }
}
</style>
