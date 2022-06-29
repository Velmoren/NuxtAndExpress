<template>
  <div class="description">
    <h2 class="description-title">{{title}}</h2>
    <p class="description-subtitle">{{description}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$store.getters['description/getTitle']
    },
    description() {
      return this.$store.getters['description/getDescription']
    }
  }
}
</script>

<style lang="scss" scoped>
.description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 50px;

  &-title {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    color: $main-white-text;
    margin-bottom: 20px;
  }

  &-subtitle {
    line-height: 26px;
    color: white;
  }
}

@media (max-width: 1400px) {

}

@media (max-width: 1200px) {
  .description {
    margin-bottom: 20px;

    &-title {
      font-size: 16px;
      margin-bottom: 15px;
    }

    &-subtitle {
      font-size: 12px;
      line-height: 20px;
    }
  }
}

@media (max-width: 991px) {
  .description {
    margin-bottom: 10px;

    &-title {
      font-size: 12px;
      margin-bottom: 15px;
    }

    &-subtitle {
      font-size: 10px;
      line-height: 16px;
    }
  }
}

@media (max-width: 768px) {
  .description {
    width: 60%;
  }
}

@media (max-width: 576px) {
  .description {
    width: 100%;
    align-items: center;
    text-align: center;
  }
}
</style>
