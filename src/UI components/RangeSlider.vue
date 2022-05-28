<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  label: {
    type: [String, Boolean],
    default: false,
  },
  modelValue: {
    type: Array,
    default: [5, 15],
  },
  min: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
  step: {
    type: Number,
    required: true,
  },
});

const emits = defineEmits(["update:modelValue"]);

const left = computed(() => {
  return scale(props.modelValue[0], props.min, props.max, 0, 100);
});
const right = computed(() => {
  return 100 - scale(props.modelValue[1], props.min, props.max, 0, 100);
});

function changeRange(event, index) {
  const minMaxGap = 1;
  const minVal = props.modelValue[0];
  const maxVal = props.modelValue[1];

  console.log("Calculate", maxVal - minVal);
  if (maxVal - minVal < minMaxGap) {
    console.log("Set");
    if (index === 0) {
      emits("update:modelValue", [maxVal - minMaxGap, props.modelValue[1]]);
    } else {
      emits("update:modelValue", [props.modelValue[0], minVal + minMaxGap]);
    }
  } else {
    console.log("Call");
    const temp = [...props.modelValue];
    temp[index] = parseInt(event.target.value);
    emits("update:modelValue", temp);
  }
}

function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div class="slider-wrap">
    <div class="slider">
      <div
        :style="{ left: left + '%', right: right + '%' }"
        class="progress"
      ></div>
    </div>
    <div class="range-input">
      <input
        @input="changeRange($event, 0)"
        :value="modelValue[0]"
        class="range-min"
        type="range"
        :min="min"
        :max="max"
        :step="step"
      />
      <input
        @input="changeRange($event, 1)"
        :value="modelValue[1]"
        class="range-max"
        type="range"
        :min="min"
        :max="max"
        :step="step"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$primary-color: #559d99;
$primary-color--light: #61b3ae;

@mixin thumb() {
  height: 17px;
  width: 17px;
  border-radius: 50%;
  background: $primary-color;
  pointer-events: auto;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}

.slider-wrap {
  margin: 1rem 0;
}

.slider {
  height: 5px;
  position: relative;
  background: #ddd;
  border-radius: 10px;

  .progress {
    height: 100%;
    position: absolute;
    left: 25%;
    right: 25%;
    border-radius: 5px;
    background: $primary-color;
  }
}

.range-input {
  position: relative;

  input {
    position: absolute;
    width: 100%;
    height: 5px;
    top: -5px;
    background: none;
    pointer-events: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
}

input[type="range"]::-webkit-slider-thumb {
  @include thumb;
  -webkit-appearance: none;
}
input[type="range"]::-moz-range-thumb {
  @include thumb;
  border: none;
  -moz-appearance: none;
}
</style>
