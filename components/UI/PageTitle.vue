<template>
  <h1 class="title">{{title}}{{subtitle ? `: ${subtitle}` : null}}</h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  color: $main-white-text;
  font-weight: bold;
}

@media (max-width: 1400px) {
  .title {
    font-size: 14px;
  }
}

@media (max-width: 1200px) {
  .title {
    font-size: 14px;
    margin-top: 10px;
  }
}

@media (max-width: 991px) {
  .title {
    font-size: 14px;
    margin-top: 10px;
  }
}
</style>
