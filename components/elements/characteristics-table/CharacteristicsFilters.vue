<template>
  <div class="filters">
    <div class="filters-box">
      <form class="filters-search__form">
        <label for="filters-search">
          <input
            type="text"
            id="filters-search"
            placeholder="DIN/ISO/PN/ГОСТ"
          >
        </label>
      </form>
      <form class="filters-selects__form">
        <label for="filters-dimA">
          <select
            v-model="filterDimA"
            name="dimA"
            id="filters-dimA"
          >
            <option
              v-for="dimAOpt in filters.dimA.values"
              :value="dimAOpt.value"
            >
              {{ dimAOpt.text }}
            </option>
          </select>
        </label>
        <label for="filters-dimB">
          <select
            v-model="filterDimB"
            name="dimB"
            id="filters-dimB"
          >
            <option
              v-for="dimBOpt in filters.dimB.values"
              :value="dimBOpt.value"
            >
              {{ dimBOpt.text }}
            </option>
          </select>
        </label>
        <label for="filters-mat">
          <select
            v-model="filterMat"
            name="mat"
            id="filters-mat"
          >
            <option
              v-for="matOpt in filters.mat.values"
              :value="matOpt.value"
            >
              {{ matOpt.text }}
            </option>
          </select>
        </label>
        <label for="filters-cov">
          <select
            v-model="filterCov"
            name="cov"
            id="filters-cov"
          >
            <option
              v-for="covOpt in filters.cov.values"
              :value="covOpt.value"
            >
              {{ covOpt.text }}
            </option>
          </select>
        </label>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    filters() {
      return this.$store.getters['filters/getFilters']
    },
    filterDimA: {
      get() {
        return this.$store.getters['filters/getFilterDimA']
      },
      set(val) {
        this.$store.dispatch('filters/setFilterDimA', val)
      }
    },
    filterDimB: {
      get() {
        return this.$store.getters['filters/getFilterDimB']
      },
      set(val) {
        this.$store.dispatch('filters/setFilterDimB', val)
      }
    },
    filterMat: {
      get() {
        return this.$store.getters['filters/getFilterMat']
      },
      set(val) {
        this.$store.dispatch('filters/setFilterMat', val)
      }
    },
    filterCov: {
      get() {
        return this.$store.getters['filters/getFilterCov']
      },
      set(val) {
        this.$store.dispatch('filters/setFilterCov', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.filters {
  padding: 20px 0;

  &-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  &-search {
    &__form {
      width: 25%;
      height: 40px;

      label {
        width: 100%;
        height: 100%;

        input {
          width: 100%;
          height: 100%;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid $main-blue;
          color: $main-blue;
          font-size: 16px;
          outline: none;

          &::placeholder {
            color: $main-blue;
          }
        }
      }
    }
  }

  &-selects {
    &__form {
      width: 70%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      label {
        position: relative;
        height: 100%;

        select {
          width: 140px;
          height: 100%;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid $main-blue;
          outline: none;
          color: $main-blue;
          appearance: none;
          cursor: pointer;
          background-color: $back-white;
        }

        &:after {
          content: "";
          display: block;
          border-style: solid;
          border-width: 6px 5px 0px;
          border-color: $main-blue transparent transparent;
          pointer-events: none;
          position: absolute;
          top: 50%;
          right: 10px;
          z-index: 82;
          margin-top: -3px;
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .filters {
    padding: 15px 0;

    &-search {
      &__form {
        height: 34px;

        label {
          input {
            font-size: 12px;
          }
        }
      }
    }

    &-selects {
      &__form {
        height: 34px;

        label {
          select {
            width: 110px;
            font-size: 12px;
            padding: 5px;
          }

          &:after {
            right: 5px;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .filters {
    padding: 10px 0;

    &-search {
      &__form {
        label {
          input {

          }
        }
      }
    }

    &-selects {
      &__form {
        width: 73%;

        label {
          select {
            width: 95px;
            font-size: 10px;
          }
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .filters {
    &-box {
      flex-direction: column;
      height: 95px;
    }

    &-search {
      &__form {
        width: 100%;
        height: 30px;

        label {
          input {

          }
        }
      }
    }

    &-selects {
      &__form {
        width: 100%;
        height: 60px;

        label {
          width: 50%;
          height: 28px;

          select {
            width: 100%;
            padding: 3px;
          }
        }
      }
    }
  }
}

@media (max-width: 400px) {
  .filters {
    &-box {
      height: 85px;
    }

    &-search {
      &__form {
        height: 25px;

        label {
          input {

          }
        }
      }
    }

    &-selects {
      &__form {
        height: 55px;

        label {
          select {
            height: 25px;
          }

          &:after {
            right: 3px;
          }
        }
      }
    }
  }
}
</style>
