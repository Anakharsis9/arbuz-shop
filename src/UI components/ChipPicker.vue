<script setup>
import { ref } from "vue";
import Chip from "../UI components/Chip.vue";

defineProps({
  label: {
    type: [String, Boolean],
    default: false,
  },
  chipsValue: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="chipPicker-wrap">
    <label v-if="label" class="label">{{ label }}</label>
    <div v-if="chipsValue.length > 0" class="chips-wrap">
      <Chip
        v-for="(chip, idx) in chipsValue"
        :key="idx"
        :value="chip"
        :name="name"
        v-model="modelValue"
        @click="$emit('update:modelValue', $event.target.value)"
      />
    </div>
    <span v-else>Рабочее время доставки окончено</span>
  </div>
</template>

<style lang="scss" scoped>
.chips-wrap {
  display: grid;
  grid-auto-flow: column;
  column-gap: 12px;
  overflow-x: auto;
}
</style>
