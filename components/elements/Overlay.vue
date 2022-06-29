<template>
  <div class="overlay" :class="isActive ? 'active' : null" @click="changeActiveMenu">

  </div>
</template>

<script>
export default {
  computed: {
    isActive() {
      return this.$store.getters['active-elements/getMobileMenuActive']
    }
  },
  methods: {
    changeActiveMenu() {
      // this.$store.dispatch('active-elements/setChangeLockedBody', this.$locker)
      this.$store.dispatch('active-elements/setChangeActiveMobileMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  display: none;
}

@media (max-width: 991px) {
  .overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
    background-color: $overlay-background;
    transform: translateX(100%);
    transition: opacity 0.5s;

    &.active {
      z-index: 98;
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>
