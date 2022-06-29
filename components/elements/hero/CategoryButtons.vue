<template>
  <div class="buttons-box">
    <category-buttons-item
      v-for="category in categories"
      :key="category.id"
      :text="category.text"
      :image="category.image"
      :link="category.link"
    />
  </div>
</template>

<script>
import CategoryButtonsItem from "@/components/elements/hero/CategoryButtonsItem";

export default {
  components: {CategoryButtonsItem},
  computed: {
    categories() {
      return this.$store.getters['categories/getCategories']
    }
  }
}
</script>

<style lang="scss" scoped>
.buttons {
  &-box {
    width: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

@media (max-width: 1400px) {
  .buttons {
    &-box {
      width: 440px;
    }
  }
}

@media (max-width: 1200px) {
  .buttons {
    &-box {
      width: 360px;
    }
  }
}

@media (max-width: 991px) {
  .buttons {
    &-box {
      width: 300px;
    }
  }
}

@media (max-width: 768px) {

}

@media (max-width: 576px) {
  .buttons {
    &-box {
      width: 100%;
    }
  }
}

</style>
