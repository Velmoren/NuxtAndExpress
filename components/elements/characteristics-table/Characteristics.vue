<template>
  <div class="characteristics-content">
    <characteristics-images/>
    <characteristics-filters/>
    <characteristics-table/>
    <characteristics-controls/>
  </div>
</template>

<script>
import CharacteristicsImages from "../../../components/elements/characteristics-table/CharacteristicsImages";
import CharacteristicsFilters from "../../../components/elements/characteristics-table/CharacteristicsFilters";
import CharacteristicsTable from "../../../components/elements/characteristics-table/CharacteristicsTable";
import CharacteristicsControls from "../../../components/elements/characteristics-table/CharacteristicsControls";

export default {
  components: {CharacteristicsImages,CharacteristicsFilters,CharacteristicsTable,CharacteristicsControls},
  methods: {
    backImage(img) {
      return {backgroundImage: `url(${img ? img : require('assets/images/prod_img.jpg')})`}
    }
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
.characteristics {
  &-content {
    z-index: 1;
    width: 1030px;
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 1400px) {
  .characteristics {
    &-content {
      width: 840px;
    }
  }
}

@media (max-width: 1200px) {
  .characteristics {
    &-content {
      width: 690px;
    }
  }
}

@media (max-width: 991px) {
  .characteristics {
    &-content {
      width: 100%;
    }
  }
}
</style>
