<script setup>
defineProps({
  label: {
    type: [String, Boolean],
    default: false,
  },
  modelValue: {
    type: String,
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
    <label v-if="label">{{ label }}</label>
    <input
      @input="$emit('update:modelValue', $event.target.value)"
      :value="modelValue"
      type="text"
      v-bind="$attrs"
    />
  </div>
</template>

<style lang="scss" scoped>
.text-field-wrap {
  display: flex;
  flex-direction: column;

  input {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
}
</style>
