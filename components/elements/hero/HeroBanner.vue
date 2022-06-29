<template>
  <div class="hero-banner">
    <VueSlickCarousel v-bind="slickOptions">
      <div v-for="i in 2" :key="i" class="img-wrapper">
        <banner-item :index="i"/>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import BannerItem from "@/components/elements/hero/BannerItem";

export default {
  components: {BannerItem},
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.img-wrapper {
  height: 100px;
}

.hero-banner {
  background-color: $main-blue;
  border-radius: 5px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
}

@media (max-width: 1400px) {

}

@media (max-width: 1200px) {
  .img-wrapper {
    height: 77px;
  }
}

@media (max-width: 991px) {
  .img-wrapper {
    height: 65px;
  }
}

@media (max-width: 768px) {
  .img-wrapper {
    height: 60px;
  }
}

@media (max-width: 576px) {
  .img-wrapper {
    height: 135px;
  }

  .hero-banner {
    width: 100%;
  }
}

@media (max-width: 400px) {
  .img-wrapper {
    height: 105px;
  }
}
</style>
