<template>
  <section class="login">
    <div class="container-custom">
      <div class="login-box">
        <login-form/>
      </div>
    </div>
  </section>
</template>

<script>
import LoginForm from "@/components/UI/forms/LoginForm";

export default {
  middleware: ['isOpenMobileMenu'],
  components: {LoginForm}
}
</script>

<style lang="scss" scoped>
.login {
  &-box {
    padding-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
