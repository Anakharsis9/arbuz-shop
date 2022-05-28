<script setup>
import { ref } from "vue";
import TextField from "../UI components/TextField.vue";
import CounterField from "../UI components/CounterField.vue";

defineProps({});

let test = ref(1);
</script>

<template>
  <form @submit.prevent="" action="submit" class="form">
    <div class="order-step">
      <h3 class="order-step__title">Шаг 1. Укажите количество арбузов</h3>
      <TextField v-model="test" label="Flhtc" />
      <!-- <CounterField v-model="test" /> -->
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
