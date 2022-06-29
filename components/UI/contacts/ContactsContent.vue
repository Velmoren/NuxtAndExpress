<template>
  <div class="contacts-content">
    <div class="ymap-wrapper">
      <div v-if="isMounted">
        <yandex-map :coords="[53.801783, 27.591323]" :zoom="13" class="map">
          <ymap-marker
            markerId="marker-standart"
            :options="{ iconColor: '#404c54' }"
            :coords="[53.801783, 27.591323]">

          </ymap-marker>
        </yandex-map>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isMounted: false
  }),
  mounted() {
    this.isMounted = true;
  }
}
</script>

<style lang="scss" scoped>
.ymap {
  &-wrapper {
    width: 100%;
    height: 415px;
    border-radius: 5px;
    overflow: hidden;
    border: 2px solid #608d98;
  }
  &-container {
    height: 415px;
  }

  &-2-1-79-gotoymaps {
    display: none;
  }
}
.contacts {
  &-content {
    width: 1030px;
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 1400px) {
  .contacts {
    &-content {
      width: 860px;
    }
  }
}

@media (max-width: 1200px) {
  .contacts {
    &-content {
      width: 690px;
    }
  }
}

@media (max-width: 991px) {
  .contacts {
    &-content {
      width: 100%;
    }
  }
}
</style>
