<script setup>
import OrderForm from "../components/OrderForm.vue";
</script>

<template>
  <section class="order-section">
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
    margin: 2rem 0;
    background-color: #fff;
    border-radius: 10px;
    width: 100%;
    padding: 1.8rem;

    box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12),
      0px 10px 32px -4px rgba(24, 39, 75, 0.1);
  }
}
</style>
