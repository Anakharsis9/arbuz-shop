<script setup>
import Cover from "./layout/Cover.vue";
import OrderSection from "./layout/OrderSection.vue";
</script>

<template>
  <Cover />
  <OrderSection />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  background-color: #d1f4f3;
}

.container {
  max-width: 1140px;
  padding: 0 15px;
  margin: 0 auto;
}

.btn {
  border: none;
  outline: none;
  padding: 1rem 1.2rem;

  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: transparent;

  &--second {
    border: 2px solid #fff;
    border-radius: 10px;
  }
}
</style>
