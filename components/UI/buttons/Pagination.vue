<template>
  <ul class="pagination-list">
    <li class="pagination-list__item prev-item" v-if="currentPage !== 1">
      <a href="#" @click.prevent="prev">«</a>
    </li>

    <li class="pagination-list__item prev-item" v-else>
      <span href="#">«</span>
    </li>

    <li
      class="pagination-list__item"
      v-if="currentPage === 1 && totalPage < 3"
      v-for="(item, idx) in totalPage"
      :class="idx === 0 ? 'active' : null"
    >
      <a href="#" @click.prevent="change(item)">
        {{item}}
      </a>
    </li>

    <li
      class="pagination-list__item"
      v-if="currentPage === 2 && totalPage < 3"
      v-for="(item, idx) in totalPage"
      :class="idx === 1 ? 'active' : null"
    >
      <a href="#" @click.prevent="change(item)">
        {{ item }}
      </a>
    </li>

    <li
      class="pagination-list__item"
      v-if="currentPage === 1 && totalPage >= 3"
      v-for="(item, idx) in 3"
      :class="idx === 0 ? 'active' : null"
    >
      <a href="#" @click.prevent="change(currentPage + idx)">
        {{ currentPage + idx }}
      </a>
    </li>

    <li
      class="pagination-list__item"
      v-if="currentPage > 1 && currentPage < totalPage && totalPage >= 3"
      v-for="(item, idx) in 3"
      :class="idx === 1 ? 'active' : null"
    >
      <a href="#" @click.prevent="change(currentPage + idx - 1)">
        {{ currentPage + idx - 1 }}
      </a>
    </li>

    <li
      class="pagination-list__item"
      v-if="currentPage === totalPage && totalPage >= 3"
      v-for="(item, idx) in 3"
      :class="idx === 2 ? 'active' : null"
    >
      <a href="#" @click.prevent="change(currentPage + idx - 2)">
        {{ currentPage + idx - 2 }}
      </a>
    </li>

    <li class="pagination-list__item next-item" v-if="currentPage === totalPage">
      <span>»</span>
    </li>

    <li class="pagination-list__item next-item" v-else>
      <a href="#" @click.prevent="next">»</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    prev: {
      type: Function,
      require: true
    },
    next: {
      type: Function,
      require: true
    },
    change: {
      type: Function,
      require: true
    }
  },
  computed: {
    currentPage() {
      return this.$store.getters['checked-good/getCurrentPage']
    },
    totalPage() {
      return this.$store.getters['checked-good/getTotalPage']
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination-list {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &__item {
    border: 1px solid rgb(221, 221, 221);
    background-color: $back-white;

    &:not(:last-child) {
      border-right: none;
    }

    &:hover {
      opacity: 0.7;
    }

    &.active {
      opacity: .8;
    }

    a, span {
      text-decoration: none;
      font-size: 14px;
      width: 34px;
      height: 34px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(96, 141, 152);
    }

    span {
      opacity: 0.7;
    }

    &.prev-item {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    &.next-item {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
}
@media (max-width: 1200px) {
  .pagination-list {
    &__item {
      a {
        padding: 8px 12px;
        font-size: 12px;
      }
    }
  }
}
@media (max-width: 768px) {
  .pagination-list {
    &__item {
      a {
        padding: 6px 8px;
        font-size: 10px;
      }
    }
  }
}
</style>
