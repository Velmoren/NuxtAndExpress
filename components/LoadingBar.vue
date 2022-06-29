<template>
  <div v-if="loading" class="loading-page">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      setTimeout(() => {
        this.loading = false
      }, 200)
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-page {
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(64, 76, 84, 1);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 97;
  color: white;
}

@media (max-width: 1400px) {
  .loading-page {
    font-size: 28px;
  }
}

@media (max-width: 1200px) {
  .loading-page {
    font-size: 24px;
  }
}

@media (max-width: 991px) {
  .loading-page {
    font-size: 20px;
  }
}

@media (max-width: 768px) {

}

@media (max-width: 576px) {
  .loading-page {
    font-size: 18px;
    padding-top: 150px;
  }
}
@media (max-width: 400px) {
  .loading-page {
    font-size: 16px;
    padding-top: 120px;
  }
}
</style>
