<template>
  <section class="hero">
    <div class="container-custom">
      <div class="hero-box">
        <div class="hero-left">
          <search-block/>
          <files/>
          <hero-banner/>
        </div>
        <div class="hero-center">
          <category-buttons/>
        </div>
        <div class="hero-right">
          <description/>
          <contacts v-if="$mq !== 'phone'"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SearchBlock from "@/components/elements/hero/SearchBlock";
import Files from "@/components/elements/hero/Files";
import HeroBanner from "@/components/elements/hero/HeroBanner";
import Description from "@/components/elements/hero/Description";
import Contacts from "@/components/elements/hero/Contacts";
import CategoryButtons from "@/components/elements/hero/CategoryButtons";

export default {
  middleware: ['isAuth', 'isOpenMobileMenu'],
  components: {SearchBlock, Files, HeroBanner, Description, Contacts, CategoryButtons},
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.hero {
  padding: 40px 0;

  &-box {
    display: flex;
    justify-content: space-between;
  }

  &-left {
    width: 280px;
  }

  &-right {
    width: 365px;
  }

  &-center {

  }
}

@media (max-width: 1400px) {

}

@media (max-width: 1200px) {
  .hero {
    padding: 30px 0;

    &-left {
      width: 220px;
    }

    &-right {
      width: 300px;
    }
  }
}

@media (max-width: 991px) {
  .hero {
    padding: 20px 0;

    &-left {
      width: 180px;
    }

    &-right {
      width: 180px;
    }
  }
}

@media (max-width: 768px) {
  .hero {
    &-box {
      flex-wrap: wrap;
    }

    &-left {
      width: 30%;
    }

    &-center {
      width: 70%;
      display: flex;
      justify-content: flex-end;
    }

    &-right {
      margin-top: 30px;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}

@media (max-width: 576px) {
  .hero {
    &-box {
      flex-direction: column;
      align-items: center;
    }

    &-left {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
      margin-bottom: 30px;
    }

    &-center {
      width: 100%;
      justify-content: center;
    }

    &-right {
      width: 100%;
    }
  }
}
</style>
