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

html {
  scroll-behavior: smooth;
}

body {
  background-color: #d1f4f3;
}

.container {
  max-width: 1140px;
  padding: 0 15px;
  margin: 0 auto;

  @media (max-width: 576px) {
  }
}

.label {
  color: #5a5959;
  font-size: 1rem;
  display: block;
  margin-bottom: 10px;
}

.btn {
  border: none;
  outline: none;
  padding: 1rem 1.2rem;

  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: transparent;
  border-radius: 10px;

  transition: background-color 0.3s;
  cursor: pointer;

  &--second {
    border: 2px solid $primary-color;
    color: $primary-color;
  }
  &--main {
    background-color: $primary-color;
  }
  &:hover {
    background-color: $primary-color--light;
  }
  &--control {
    padding: 0.8rem 1.2rem;
    font-size: 1.2rem;
  }
}
</style>
