<template>
  <b-modal body-class="table-modal-body" hide-header hide-footer centered id="table-modal" size="lg">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      :controls="modalImageSrc.length > 1"
      :indicators="modalImageSrc.length > 1"
    >
      <b-carousel-slide
        v-for="(image, index) in modalImageSrc"
        :key="index"
        :img-src="image.url"
      ></b-carousel-slide>
    </b-carousel>
  </b-modal>
</template>
<script>
export default {
  computed: {
    modalImageSrc() {
      return this.$store.getters['checked-good/getCheckedGoodTableAndOther']
    }
  }
}
</script>

<style lang="scss">
//.carousel-control-prev-icon, .carousel-control-next-icon {
//  background-color: #17a2b8;
//  width: 30px;
//  height: 30px;
//  border-radius: 50%;
//  background-size: 60%;
//}
.carousel-inner {
  display: flex;
  align-items: center;
}
</style>
