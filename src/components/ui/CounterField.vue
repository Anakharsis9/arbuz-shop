<script setup>
import { ref } from "vue";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  maxValue: {
    type: Number,
    default: 3,
  },
  minValue: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits(["update:modelValue"]);

let countValue = ref(props.modelValue);

function increaseValue() {
  if (props.modelValue >= props.maxValue)
    return emits("update:modelValue", props.maxValue);

  countValue = props.modelValue;
  countValue++;
  emits("update:modelValue", countValue);
}

function decreaseValue() {
  if (props.modelValue <= props.minValue)
    return emits("update:modelValue", props.minValue);

  countValue = props.modelValue;
  countValue--;
  emits("update:modelValue", countValue);
}
</script>

<template>
  <div class="counter-wrap">
    <label class="label"> от 1 до 3 штук</label>
    <div class="counter__controls">
      <button @click="decreaseValue" class="btn btn--main btn--control">
        -
      </button>
      <span class="counter__value">{{ modelValue }}</span>
      <button @click="increaseValue" class="btn btn--main btn--control">
        +
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.counter {
  &__controls {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 150px;
  }

  &__value {
    font-size: 1.2rem;
  }
}
</style>
