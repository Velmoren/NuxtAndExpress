<template>
  <nuxt-link :to="{name: 'catalog-category-item', params: { category: $route.params.category, item: item.id}}">
    <div class="item">
      <div class="item-image" :style="backImage(item.files.image.url)"></div>
      <div class="item-description">
        <h2>{{ item.name }}</h2>
        <div class="item-description__bottom">
          <div class="item-description__standards">
            <div class="standard">
              <span class="standard-type">{{ item.standard.type }}</span>
              <span class="standard-value">{{ item.standard.value }}</span>
            </div>
            <div class="standard" v-for="(analog, idx) in item.analogs" :key="idx">
              <span class="standard-type">{{ analog.type }}</span>
              <span class="standard-value">{{ analog.value }}</span>
            </div>
          </div>
          <button class="item-description__button"><span>в каталог</span></button>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: false
    }
  },
  methods: {
    backImage(img) {
      return {backgroundImage: `url(${img ? img : require('~/assets/images/prod_img.jpg')})`}
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  min-height: 90px;
  //background-color: $sections-background-blue;
  background-color: $main-white-text;
  border-radius: 5px;
  border: 1px solid $main-blue;
  margin-bottom: 10px;

  &:hover {
    border: 1px solid $main-white-text;
  }

  &-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: $main-white-text;
    width: 15%;
    padding: 10px;
    border: 1px solid $main-blue;
    border-radius: 5px;
    margin: 5px;
  }

  &-description {
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px;

    h2 {
      color: $sections-background-blue;
      font-size: 20px;
    }

    &__bottom {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    &__standards {
      display: flex;

      .standard {
        margin-right: 10px;
        border-bottom: 1px solid $sections-background-blue;

        &-type {
          color: $sections-background-blue;
          font-weight: bold;
        }

        &-value {
          color: $sections-background-blue;
        }
      }
    }

    &__button {
      height: 35px;
      padding: 0 10px;
      margin-left: 5px;
      background-color: $main-blue-dark;
      border-radius: 5px;
      outline: none;
      border: 1px solid $main-blue;
      cursor: pointer;
      color: $main-white-text;
      text-transform: uppercase;

      &:hover {
        opacity: 0.7;
      }
    }
  }
}

@media (max-width: 1200px) {
  .item {
    min-height: 80px;

    &-description {
      h2 {
        font-size: 16px;
      }

      &__button {
        height: 30px;
        font-size: 10px;
      }
    }
  }
}

@media (max-width: 768px) {
  .item {
    &-description {
      h2 {
        font-size: 14px;
      }

      &__standards {
        .standard {
          font-size: 12px;
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .item {
    min-height: 70px;

    &-description {
      margin: 5px;

      h2 {
        font-size: 12px;
      }

      &__button {
        height: 24px;
        width: 24px;
        padding: 0;
        background-image: url(~assets/images/shopping-cart.svg);
        background-repeat: no-repeat;
        background-size: 14px;
        background-position: center;

        span {
          display: none;
        }
      }

      &__standards {
        .standard {
          font-size: 10px;
        }
      }
    }
  }
}

@media (max-width: 400px) {
  .item {
    &-image {
      width: 20%;
    }

    &-description {
      width: 80%;

      &__standards {
        .standard {
          font-size: 8px;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
