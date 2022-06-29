<template>
  <div class="category-menu">
    <ul class="category-menu-list">
      <li v-for="category in categories" :key="category.id">
        <nuxt-link
          :to="{name: category.link.name, params: { category: category.link.params.category} }"
          class="category-menu-item"
        >
          <span class="category-menu-item__image" :style="backImage(category.image)"></span>
          <span class="category-menu-item__text">{{category.text}}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    backImage(img) {
      return {backgroundImage: `url(${require('~/assets/images/categoryIcons/' + img)})`}
    }
  },
  computed: {
    categories() {
      return this.$store.getters['categories/getCategories']
    }
  }
}
</script>

<style lang="scss" scoped>
.category-menu {
  width: 280px;
  display: flex;
  flex-direction: column;

  &-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid $main-blue;
    border-radius: 5px;
    position: sticky;
    top: 123px;
    z-index: 101;

    li {
      border-bottom: 1px solid $main-blue;

      &:first-child {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;

        a {
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }
      }

      &:last-child {
        border-bottom: none;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;

        a {
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
        }
      }
    }
  }

  &-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: $main-white-text;

    &:hover {
      opacity: 0.7;
    }

    &__image {
      display: block;
      width: 35px;
      min-width: 35px;
      height: 35px;
      margin-right: 10px;
      background-repeat: no-repeat;
      background-size: 25px;
      background-position: center;
    }

    &__text {
      color: $main-blue-dark;
    }

    &.nuxt-link-active {
      background-color: $back-gray-dark;
    }
  }
}

@media (max-width: 1400px) {
  .category-menu {
    width: 240px;
    &-list {
      top: 118px;
    }
  }
}

@media (max-width: 1200px) {
  .category-menu {
    width: 220px;

    &-list {
      top: 96px;
    }
  }
}

@media (max-width: 991px) {
  .category-menu {
    display: none;
  }
}
</style>
