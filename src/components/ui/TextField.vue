<script setup>
defineProps({
  label: {
    type: [String, Boolean],
    default: false,
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
});
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div class="text-field-wrap">
    <label v-if="label" class="label">{{ label }}</label>
    <input
      @input="$emit('update:modelValue', $event.target.value)"
      @change="$emit('change:modelValue', $event.target.value)"
      :value="modelValue"
      type="text"
      v-bind="$attrs"
      @keyup.enter.prevent=""
    />
  </div>
</template>

<style lang="scss" scoped>
.text-field-wrap {
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
