<template>
  <div class="banner-item" :style="backImage">

  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    backImage() {
      return {backgroundImage: `url(${require('~/assets/images/sliderItems/' + this.index + '.gif')})`}
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-item {
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 auto;
  width: 100%;
  height: 100px
}

@media (max-width: 1400px) {

}

@media (max-width: 1200px) {
  .banner-item {
    height: 77px;
  }
}

@media (max-width: 991px) {
  .banner-item {
    height: 65px;
  }
}

@media (max-width: 768px) {
  .banner-item {
    height: 60px;
  }
}
@media (max-width: 576px) {
  .banner-item {
    height: 135px;
  }
}

@media (max-width: 400px) {
  .banner-item {
    height: 105px;
  }
}
</style>

