<template>
  <div class="breadcrumbs-wrapper">
    <ul class="breadcrumbs-list">
      <li v-for="(item, index) in breadcrumbs" :key="index">
        <nuxt-link :to="item.path" v-if="item.type === 'link'" class="breadcrumbs-link">
          {{ item.name }}
        </nuxt-link>

        <span v-else class="breadcrumbs-span">
          {{ item.shortName }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      return this.$store.getters['breadcrumbs/getBreadcrumbs']
    }
  }
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
  &-wrapper {
    padding-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: $main-white-text;
  }

  &-list {
    display: flex;
  }

  &-link {
    padding-right: 5px;
    color: $main-white-text;

    &:hover {
      color: lighten($main-blue, 10%);
    }

    &:after {
      content: '»';
    }
  }
}

@media (max-width: 1400px) {
  .breadcrumbs {
    &-link, &-span {
      font-size: 14px;
    }
  }
}

@media (max-width: 1200px) {
  .breadcrumbs {
    &-wrapper {
      padding-top: 10px;
      margin-bottom: 10px;
    }

    &-link, &-span {
      font-size: 14px;
    }
  }
}

@media (max-width: 991px) {
  .breadcrumbs {
    &-wrapper {
      padding-top: 10px;
      margin-bottom: 10px;
      line-height: 10px;
    }

    &-link, &-span {
      font-size: 14px;
    }
  }
}
</style>
