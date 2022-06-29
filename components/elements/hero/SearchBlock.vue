<template>
  <form @submit.prevent="onSubmit" class="search-block">
    <h2 class="search-block__title">ВЫБЕРИТЕ СТАНДАРТ</h2>
    <label class="search-block__label" for="search-block">
      DIN / ISO / ГОСТ *
      <input
        v-model="searchInputValue"
        class="search-block__input"
        type="text"
        id="search-block"
      >
    </label>
    <button type="submit" class="search-block__btn">
      найти в каталоге
    </button>
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
    onSubmit() {
      if (this.searchInputValue !== '') {
        this.$router.replace({name: 'search', query: { str: this.searchInputValue }});
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search-block {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 60px;

  &__title {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    color: $main-white-text;
    margin-bottom: 20px;
  }

  &__label {
    display: flex;
    flex-direction: column;
    color: $main-white-text;
    margin-bottom: 30px;
  }

  &__input {
    margin-top: 5px;
    background-color: lighten($sections-background-blue, 10%);
    border-radius: 5px;
    border: 1px solid lighten($sections-background-blue, 10%);
    height: 40px;
    text-indent: 15px;
    outline: none;
    color: $main-white-text;
    box-shadow: none;
  }

  &__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 20px;
    color: $main-white-text;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    background-color: $main-blue-dark;
    outline: none;
    box-shadow: none;
    cursor: pointer;

    &:hover {
      background-color: darken($main-blue-dark, 5%);
    }
  }
}

@media (max-width: 1400px) {

}

@media (max-width: 1200px) {
  .search-block {
    margin-bottom: 30px;

    &__title {
      font-size: 16px;
      margin-bottom: 15px;
    }

    &__label {
      font-size: 12px;
      margin-bottom: 20px;
    }

    &__input {
      height: 35px;
    }

    &__btn {
      height: 35px;
      font-size: 12px;
    }
  }
}

@media (max-width: 991px) {
  .search-block {
    margin-bottom: 25px;

    &__title {
      font-size: 12px;
    }

    &__label {
      font-size: 10px;
      margin-bottom: 15px;
    }

    &__input {
      height: 30px;
    }

    &__btn {
      height: 30px;
      font-size: 10px;
    }
  }
}

@media (max-width: 768px) {

}

@media (max-width: 576px) {
  .search-block {
    width: 65%;
  }
}
</style>
