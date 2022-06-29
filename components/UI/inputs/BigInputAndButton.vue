<template>
  <form @submit.prevent="onSubmit" class="big-input__wrapper">
    <label for="big-input" class="big-input__label">
      <input
        type="text"
        id="big-input"
        class="big-input__input"
        placeholder="DIN/ISO/PN/ГОСТ"
        v-model="searchInputValue"
      >

      <button type="submit" class="big-input__search"></button>
      <button class="big-input__reset"></button>
    </label>
  </form>
</template>

<script>
export default {
  computed: {
    searchInputValue: {
      get() {
        return this.$store.getters['search/getSearchInputValue']
      },
      set(val) {
        this.$store.dispatch('search/setSearchInputValue', val)
      }
    }
  },
  methods: {
   async onSubmit() {
      await this.$axios.$get(`/api/search?str=${this.searchInputValue}`).then(res => {
        this.$router.replace({name: 'search', query: { str: this.searchInputValue }});
        this.$store.dispatch('breadcrumbs/setBreadcrumbs', {category: `search`})
        this.$store.dispatch('search/setSearchList', res)
        this.$store.dispatch('search/resetSearchInputValue')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.big-input {
  &__wrapper {
    background-color: $sections-background-blue;
    position: sticky;
    top: 123px;
    z-index: 95;
  }

  &__label {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  &__input {
    flex-grow: 1;
    padding: 9px 15px;
    border-radius: 5px;
    color: $main-blue-dark;
    background-color: $main-white-text;
    font-size: 14px;
    outline: none;
    border: 1px solid $main-blue;

    &::placeholder {
      color: $main-blue-dark;
    }
  }

  &__reset, &__search {
    height: 36px;
    width: 35px;
    margin-left: 5px;
    background-color: $main-blue-dark;
    border-radius: 5px;
    outline: none;
    border: 1px solid $main-blue;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: center;

    &:hover {
      opacity: 0.7;
    }
  }

  &__reset {
    background-image: url(~assets/images/close.svg);
  }

  &__search {
    background-image: url(~assets/images/search.svg);
  }
}

@media (max-width: 1400px) {
  .big-input {
    &__wrapper {
      top: 118px;
    }
  }
}

@media (max-width: 1200px) {
  .big-input {
    &__wrapper {
      top: 96px;
    }
  }
}

@media (max-width: 991px) {
  .big-input {
    &__label {
      margin-bottom: 10px;
    }

    &__wrapper {
      top: 76px;
    }

    &__input {
      font-size: 10px;
      padding: 6px 12px;
    }

    &__reset, &__search {
      width: 25px;
      height: 25px;
      background-size: 16px;
    }
  }
}
</style>
