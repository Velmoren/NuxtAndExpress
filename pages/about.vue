<template>
  <section class="about">
    <div class="container-custom">
      <div class="about-top">
        <breadcrumbs />
        <page-title :title="categoryTitle"/>
      </div>
      <div class="about-wrapper">
        <category-menu/>
        <about-content/>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import PageTitle from "@/components/UI/PageTitle";
import CategoryMenu from "@/components/elements/CategoryMenu"
import AboutContent from "@/components/UI/about/AboutContent";

export default {
  middleware: ['isAuth', 'isOpenMobileMenu'],
  fetch({store}) {
    store.dispatch('breadcrumbs/setBreadcrumbs', {category: 'about'})
  },
  components: {Breadcrumbs, PageTitle, CategoryMenu, AboutContent},
  computed: {
    categoryTitle() {
      return this.$store.getters['breadcrumbs/getSelectedCategoryTitle']
    },
  }
}
</script>

<style lang="scss" scoped>
.about {
  &-top {
    position: sticky;
    top: 65px;
    z-index: 95;
    background-color: $sections-background-blue;
  }

  &-wrapper {
    display: flex;
    justify-content: space-between;
  }
}

@media (max-width: 1400px) {
  .about {
    &-top {
      top: 60px;
    }
  }
}

@media (max-width: 1200px) {
  .about {
    &-top {
      top: 50px;
    }
  }
}

@media (max-width: 991px) {
  .about {
    &-top {
      top: 40px;
    }
  }
}
</style>
