<template>
  <div class="burger" @click="changeActiveMobileMenu">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  methods: {
    changeActiveMobileMenu() {
      // this.$store.dispatch('active-elements/setChangeLockedBody', this.$locker)
      this.$store.dispatch('active-elements/setChangeActiveMobileMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
.burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;

  span {
    display: block;
    height: 3px;
    width: 25px;
    background-color: #404c54;
  }
}
@media (max-width: 991px) {
  .burger {
    display: flex;
  }
}
</style>
