<template>
  <div class="characteristics-controls">
    <per-page/>
    <pagination
      :prev="prevPage"
      :next="nextPage"
      :change="changePage"
    />
  </div>
</template>

<script>
import PerPage from "@/components/UI/buttons/PerPage";
import Pagination from "@/components/UI/buttons/Pagination";

export default {
components: {PerPage, Pagination},
  methods: {
    prevPage() {
      this.$store.dispatch('checked-good/prevPage')
    },
    nextPage() {
      this.$store.dispatch('checked-good/nextPage')
    },
    changePage(idx) {
      this.$store.dispatch('checked-good/changeCurrentPage', idx)
    },
  },
}
</script>

<style lang="scss" scoped>
.characteristics {
  &-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
</style>
