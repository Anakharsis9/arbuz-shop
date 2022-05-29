<script setup>
import { ref } from "vue";

defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    :class="{ 'chip-wrap--selected': modelValue === value }"
    class="chip-wrap"
  >
    <input
      @change="$emit('update:modelValue', $event.target.value)"
      :modelValue="modelValue"
      :value="value"
      :name="name"
      type="radio"
      class="chip__input"
    />
    <label>{{ value }}</label>
  </div>
</template>

<style lang="scss" scoped>
.chip-wrap {
  position: relative;
  text-align: center;
  padding: 10px 16px;
  margin: 8px 0;
  color: $primary-color;

  border: 1px solid $primary-color;
  border-radius: 100px;

  transition: background-color 0.3s;

  &--selected {
    color: #fff;
    background-color: $primary-color;
  }
  label {
    white-space: nowrap;
  }
}

.chip__input {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  cursor: pointer;

  -webkit-appearance: none;
  appearance: none;

  margin: 0;

  &:focus {
    outline: none;
  }
}
</style>
