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
    <div class="chips-wrap">
      <Chip
        v-for="(chip, idx) in chipsValue"
        :key="idx"
        :value="chip"
        :name="name"
        v-model="modelValue"
        @click="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chipPicker-wrap {
  display: flex;
  flex-direction: column;
}

.chips-wrap {
  display: flex;
  align-items: center;
  overflow-x: auto;
}
</style>
