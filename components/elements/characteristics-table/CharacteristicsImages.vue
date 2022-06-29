<template>
  <div class="characteristics-images">

    <div class="characteristics-images__item">
      <div class="characteristics-images__logo" @click="showImageModal(image)">
        <img
          :src="image ? image.url : require('~/assets/images/gear.png')"
          :alt="image ? image.name : 'standard'"
        >
      </div>
    </div>

    <div class="characteristics-images__item">
      <div class="characteristics-images__scheme" @click="showImageModal(schema)">
        <img
          :src="schema ? schema.url : require('~/assets/images/gear.png')"
          :alt="schema ? schema.name : 'standard'"
        >
      </div>
    </div>

    <div class="characteristics-images__item">
      <div class="characteristics-images__table">
        <img
          :src="table ? table.url : require('~/assets/images/gear.png')"
          :alt="table ? table.name : 'standard'"
        >
      </div>
    </div>

    <div class="characteristics-images__item standarts">
      <div class="characteristics-images__standarts">
        <div class="characteristics-images__standarts-item">
          <strong>{{standard.type}}</strong>
          <span>: {{standard.value}}</span>
        </div>

        <div class="characteristics-images__standarts-item" v-for="analog in analogs" :key="analog.value">
          <strong>{{analog.type}}</strong>
          <span>: {{analog.value}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    image() {
      return this.$store.getters["checked-good/getCheckedGoodLogo"];
    },
    schema() {
      return this.$store.getters["checked-good/getCheckedGoodSchema"];
    },
    table() {
      return this.$store.getters["checked-good/getCheckedGoodTable"];
    },
    standard() {
      return this.$store.getters["checked-good/getCheckedGoodStandard"];
    } ,
    analogs() {
      return this.$store.getters["checked-good/getCheckedGoodAnalogs"];
    }
  },
  methods: {
    showImageModal(image) {
      this.$store.dispatch("common/setImageFromProduct", image);
      this.$root.$emit("bv::show::modal", "image-static-modal");
    }
  }
};
</script>

<style lang="scss" scoped>
.characteristics-images {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  &__logo, &__scheme, &__table {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 210px;
    height: 120px;
    border: 1px solid rgb(184, 201, 214);
    border-radius: 5px;
    padding: 5px;
    background-color: $main-white-text;

    &.standarts {
      justify-content: flex-start;
      align-items: flex-start;
      padding: 15px;
    }

    cursor: pointer;

    img {
      max-height: 100%;
      max-width: 100%;
    }
  }

  &__standarts {
    width: 100%;
    &-item {
      display: flex;

      strong {
        min-width: 50px;
        display: block;
      }
    }
  }
}

@media (max-width: 1400px) {
  .characteristics-images {
    &__item {
      width: 180px;
      height: 100px;
    }
  }
}

@media (max-width: 1200px) {
  .characteristics-images {
    &__item {
      width: 170px;
      height: 95px;
      padding: 5px;
    }
  }
}

@media (max-width: 768px) {
  .characteristics-images {
    &.standarts {
      padding: 5px;
    }
    &__item {
      width: 130px;
    }

    &__standarts {
      &-item {
        font-size: 12px;

        strong {
          min-width: 40px;
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .characteristics-images {
    &__item {
      width: 180px;
      height: 110px;
      padding: 3px;
      margin-bottom: 5px;
    }
  }
}

@media (max-width: 400px) {
  .characteristics-images {
    &__item {
      width: 140px;
      height: 80px;
      padding: 3px;
    }
  }
}
</style>
