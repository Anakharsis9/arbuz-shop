<script setup>
import OrderForm from "@/components/order-form/OrderForm.vue";
</script>

<template>
  <section class="order-section" id="order-section">
    <div class="container">
      <h2 class="order-section__title">Заказать онлайн</h2>
      <div class="order-section__block">
        <OrderForm />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.order-section {
  &__title {
    margin-top: 4rem;
  }
  &__block {
    @media (max-width: 576px) {
      margin: 0 -15px;
    }
  }
}
</style>
