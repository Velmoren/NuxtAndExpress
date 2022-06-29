<template>
  <b-modal body-class="image-modal-body" hide-header hide-footer centered id="image-modal">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      :controls="modalImageSrc.length > 1"
      :indicators="modalImageSrc.length > 1"
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        :img-src="modalImageSrc.url"
      ></b-carousel-slide>
    </b-carousel>
  </b-modal>
</template>
<script>
export default {
  computed: {
    modalImageSrc() {
      console.log(this.$store.getters['checked-good/getCheckedGoodLogo'])
      return this.$store.getters['checked-good/getCheckedGoodLogo']
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel-control-prev-icon, .carousel-control-next-icon {
  background-color: #17a2b8;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-size: 60%;
}
</style>
