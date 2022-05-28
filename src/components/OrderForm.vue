<script setup>
import { ref } from "vue";
import TextField from "../UI components/TextField.vue";
import CounterField from "../UI components/CounterField.vue";
import RangeSlider from "../UI components/RangeSlider.vue";
import ChipPicker from "../UI components/ChipPicker.vue";

defineProps({});

const test = ref([1, 10]);
const test2 = ref([
  "awdawd",
  "awdawdawd1",
  "awdawdawd2",
  "awdawdawd3",
  "awdawdawd4",
  "awdawdawd5",
  "awdawdawd6",
  "awdawdawd7",
  "awdawdawd8",
]);
const orderDate = ref("");
</script>

<template>
  <form @submit.prevent="" action="submit" class="form">
    <div class="order-step">
      <h3 class="order-step__title">Шаг 1. Укажите количество арбузов</h3>
      <!-- <TextField v-model="test" label="Flhtc" /> -->
      <!-- <CounterField v-model="test" /> -->
      <RangeSlider
        v-model="test"
        label="Укажите весовой диапазон"
        :min="1"
        :max="35"
        :step="1"
      />
      <ChipPicker
        :chips-value="test2"
        :name="'orderDate'"
        v-model="orderDate"
      />
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
