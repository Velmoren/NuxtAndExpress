<template>
  <section class="contacts">
    <div class="container-custom">
      <div class="contacts-top">
        <breadcrumbs />
        <page-title :title="categoryTitle"/>
      </div>
      <div class="contacts-wrapper">
        <category-menu/>
        <contacts-content/>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import PageTitle from "@/components/UI/PageTitle";
import CategoryMenu from "@/components/elements/CategoryMenu"
import ContactsContent from "@/components/UI/contacts/ContactsContent";

export default {
  middleware: ['isAuth', 'isOpenMobileMenu'],
  fetch({store}) {
    store.dispatch('breadcrumbs/setBreadcrumbs', {category: 'contacts'})
  },
  components: {Breadcrumbs, PageTitle, CategoryMenu, ContactsContent},
  computed: {
    categoryTitle() {
      return this.$store.getters['breadcrumbs/getSelectedCategoryTitle']
    },
  }
}
</script>

<style lang="scss" scoped>
.contacts {
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
  .contacts {
    &-top {
      top: 60px;
    }
  }
}

@media (max-width: 1200px) {
  .contacts {
    &-top {
      top: 50px;
    }
  }
}

@media (max-width: 991px) {
  .contacts {
    &-top {
      top: 40px;
    }
  }
}
</style>
