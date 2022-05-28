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
  <div class="chip-wrap">
    {{ value }}
    <input
      @change="$emit('update:modelValue', $event.target.value)"
      :modelValue="modelValue"
      :value="value"
      type="radio"
      class="chip__input"
      :name="name"
    />
  </div>
</template>

<style lang="scss" scoped>
$primary-color: #559d99;
.chip-wrap {
  position: relative;
  text-align: center;
  padding: 0.8rem 1rem;
  border: 1px solid $primary-color;
  border-radius: 100px;
  color: $primary-color;
}

.chip__input {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  // -webkit-appearance: none;
  // appearance: none;

  // background-color: #fff;
  margin: 0;
}
</style>
