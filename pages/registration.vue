<template>
  <section class="registration">
    <div class="container-custom">
      <div class="registration-box">
        registration
        <nuxt-link to="/login">-></nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import LoginForm from "@/components/UI/forms/LoginForm";

export default {
  middleware: ['isAuth', 'isOpenMobileMenu'],
  components: {LoginForm}
}
</script>

<style lang="scss" scoped>
.registration {
  &-box {
    padding-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
