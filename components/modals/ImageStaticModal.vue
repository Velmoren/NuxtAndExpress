<template>
  <div>
    <b-modal
      id="image-static-modal"
      hide-header hide-footer centered
      size="md"
    >
      <img v-if="image" :src="image.url" alt="">
    </b-modal>
  </div>
</template>

<script>
export default {
  computed: {
    image() {
      return this.$store.getters['common/getImageFromProduct']
    }
  },
  methods: {
    hide() {
      this.$root.$emit('bv::hide::modal', 'image-static-modal')
    },
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
  }
</style>
