<template>
  <label for="per-page" class="per-page-box">
    <select
      name="per-page"
      id="per-page"
      v-model="countPage"
    >
      <option
        v-for="opt in countPageOptions"
        :value="opt.value"
        :key="opt.id"
      >
        {{opt.value}}
      </option>
    </select>
  </label>
</template>

<script>
export default {
  computed: {
    countPage: {
      get() {
        return this.$store.getters['checked-good/getCountPage']
      },
      set(newValue) {
        this.$store.dispatch('checked-good/setCountPage', newValue)
        this.$store.dispatch('checked-good/resetCurrentPage')
      }
    },
    countPageOptions() {
      return this.$store.getters['checked-good/getCountPageOptions']
    },
    totalPage() {
      return this.$store.getters['checked-good/getTotalPage']
    }
  },
}
</script>

<style lang="scss" scoped>
.per-page {
  &-box {
    width: 70px;
    position: relative;
    height: 100%;

    select {
      width: 100%;
      height: 100%;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid rgb(96, 141, 152);
      outline: none;
      color: rgb(96, 141, 152);
      appearance: none;
      cursor: pointer;
      font-size: 14px;
    }

    &:after {
      content: "";
      display: block;
      border-style: solid;
      border-width: 6px 5px 0px;
      border-color: $main-blue transparent transparent;
      pointer-events: none;
      position: absolute;
      top: 50%;
      right: 10px;
      z-index: 82;
      margin-top: -3px;
    }
  }
}

@media (max-width: 1200px) {
  .per-page {
    &-box {
      width: 60px;

      select {
        padding: 8px;
        font-size: 12px;
      }
    }
  }
}

@media (max-width: 768px) {
  .per-page {
    &-box {
      width: 50px;

      select {
        padding: 6px;
        font-size: 10px;
      }
    }
  }
}
</style>
