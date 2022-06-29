<template>
  <nuxt-link :to="{name: link.name, params: { category: link.params.category} }" class="button">
    <span class="button-text">{{text}}</span>
    <div class="button-image" :style="backImage"></div>
  </nuxt-link>
</template>

<script>
export default {
props: {
  text: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: Object,
    required: true
  }
},
  computed: {
    backImage() {
      return {backgroundImage: `url(${require('~/assets/images/categoryIcons/' + this.image)})`}
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  width: 145px;
  height: 130px;
  border: 2px solid #608d98;
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &-text {
    color: $main-white-text;
    text-transform: uppercase;
    font-size: 12px;
  }

  &-image {
    width: 60px;
    height: 60px;
    background-repeat: no-repeat;
    background-size: contain;
    align-self: flex-end;
  }
}

@media (max-width: 1400px) {
  .button {
    width: 125px;
    height: 120px;

    &-text {
      font-size: 10px;
    }
  }
}

@media (max-width: 1200px) {
  .button {
    width: 110px;
    height: 100px;
    margin: 5px;

    &-text {
      font-size: 8px;
    }

    &-image {
      width: 40px;
      height: 40px;
    }
  }
}

@media (max-width: 991px) {
  .button {
    width: 90px;
    height: 85px;
    margin: 5px;

    &-text {
      font-size: 7px;
    }

    &-image {
      width: 30px;
      height: 30px;
    }
  }
}

@media (max-width: 768px) {

}

@media (max-width: 576px) {
  .button {
    width: 110px;
    height: 105px;
    margin: 5px;
    padding: 10px 5px;

    &-text {
      font-size: 10px;
    }

    &-image {
      width: 40px;
      height: 40px;
    }
  }
}
@media (max-width: 400px) {
  .button {
    width: 85px;
    height: 90px;
    margin: 5px;
    padding: 10px 5px;
    &-text {
      font-size: 7px;
    }

    &-image {
      width: 35px;
      height: 35px;
    }
  }
}
</style>
