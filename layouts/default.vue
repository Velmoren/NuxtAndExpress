<template>
  <div class="layout">
    <Header/>

    <main>
      <Nuxt/>
    </main>

    <Footer/>
    <Overlay/>
    <MobileMenu/>
    <modals/>
  </div>
</template>

<script>

import MobileMenu from '../components/elements/MobileMenu'
import Overlay from '../components/elements/Overlay'
import Modals from "../components/modals/Modals";
import VueScrollbar from 'vue2-scrollbar';


export default {
  components: {MobileMenu, Overlay, Modals, VueScrollbar},
  async fetch() {
    await this.$axios.$get('/api/contacts').then(res => {
      this.$store.dispatch('contacts/setContacts', res)
    })
  },
  mounted() {
    if (this.$storage.getLocalStorage("cart")) {
      this.$store.dispatch("cart/setCartData", this.$storage.getLocalStorage("cart"));
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
}

main {
  padding-top: 65px;
  flex: 1 0 auto;
}

@media (max-width: 1400px) {
  main {
    padding-top: 60px;
  }
}

@media (max-width: 1200px) {
  main {
    padding-top: 50px;
  }
}

//@media (max-width: 991px) {
//  main {
//    padding-top: 40px;
//  }
//}

@media (max-width: 768px) {

}
</style>
