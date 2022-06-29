<template>
  <div class="files">
    <nuxt-link to="/" class="files-item files-pdf">
      <div class="files-item__icon icon"></div>
      <div class="files-item__text text">каталог</div>
    </nuxt-link>
    <nuxt-link to="/" class="files-item files-price">
      <div class="files-item__icon icon"></div>
      <div class="files-item__text text">прайс-лист</div>
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.files {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;

  &-item {
    height: 30px;
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &:hover {
      opacity: 0.7;
    }

    &__text {
      display: flex;
      align-items: center;
      color: $main-white-text;
      text-transform: uppercase;
      margin-left: 5px;
    }

    &__icon {
      width: 30px;
      height: 30px;
    }
  }

  &-pdf {
    .icon {
      background-image: url(~assets/images/pdf.svg);
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  &-price {
    .icon {
      background-image: url(~assets/images/document.svg);
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
}

@media (max-width: 1400px) {

}

@media (max-width: 1200px) {
  .files {
    margin-bottom: 30px;

    &-item {
      &__icon {
        width: 25px;
        height: 25px;
      }

      &__text {
        font-size: 12px;
      }
    }
  }
}

@media (max-width: 991px) {
  .files {
    margin-bottom: 25px;

    &-item {
      &__icon {
        width: 20px;
        height: 20px;
      }

      &__text {
        font-size: 10px;
      }
    }
  }
}

@media (max-width: 768px) {

}

@media (max-width: 576px) {
  .files {
    width: 30%;
    flex-direction: column;
    justify-content: flex-end;

    &-item {
      width: 100%;
      height: 40px;

      &__icon {
        width: 30px;
        height: 30px;
      }
    }
  }
}
@media (max-width: 400px) {
  .files {
    &-item {
      &__text {
        font-size: 8px;
      }
    }
  }
}

</style>
