<script setup>
import { ref } from "vue";
import Chip from "../UI components/Chip.vue";

defineProps({});
const test = ref("");
</script>

<template>
  <div class="chipPicker-wrap">
    <Chip value="1" name="test" v-model="test" />
    <Chip value="2" name="test" v-model="test" />
  </div>
</template>

<style lang="scss" scoped></style>
