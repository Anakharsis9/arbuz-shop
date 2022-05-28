<script setup>
import { ref } from "vue";
import TextField from "../UI components/TextField.vue";
import CounterField from "../UI components/CounterField.vue";
import RangeSlider from "../UI components/RangeSlider.vue";
import ChipPicker from "../UI components/ChipPicker.vue";
import { v4 as uuidv4 } from "uuid";

defineProps({});

const order = ref({
  orderId: uuidv4(),
  itemsCount: 0,
  weightRange: [5, 10],
  userInfo: {
    phone: "",
    address: {
      street: "",
      apartment: "",
      floor: "",
      doorPhone: "",
    },
  },
  deliveryDate: "",
  deliveryTime: "",
  isNeedCut: false,
});

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
const slider = ref(null);
function setWeight(minVal, maxVal) {
  if (!slider.value) return;

  slider.value.setRange(minVal, maxVal);
}
</script>

<template>
  <form @submit.prevent="" action="submit" class="form">
    <div class="order-step">
      <h3 class="order-step__title">Шаг 1. Укажите количество арбузов</h3>
      <CounterField v-model="order.itemsCount" class="order-step__row" />
      <div class="range-control">
        <label class="label">Укажите весовой диапазон</label>
        <div class="weight-input">
          <TextField
            :model-value="order.weightRange[0]"
            @change:model-value="setWeight(+$event, order.weightRange[1])"
            label="Мин"
            type="number"
          />
          <TextField
            :model-value="order.weightRange[1]"
            @change:model-value="setWeight(order.weightRange[0], +$event)"
            label="Макс"
            type="number"
          />
        </div>
        <RangeSlider
          ref="slider"
          v-model="order.weightRange"
          :min="1"
          :max="35"
          :step="1"
          :gap="1"
        />
      </div>
    </div>
    <div class="order-step">
      <h3 class="order-step__title">Шаг 2. Укажите контакты</h3>
      <div class="second-step">
        <div class="user-info order-step__row">
          <TextField v-model="order.userInfo.phone" label="Номер телефона" />
          <TextField v-model="order.userInfo.address.street" label="Адрес" />
        </div>
        <div class="address-details order-step__row">
          <TextField
            v-model="order.userInfo.address.apartment"
            label="Квартира/офис"
          />
          <TextField v-model="order.userInfo.address.floor" label="Этаж" />
          <TextField
            v-model="order.userInfo.address.doorPhone"
            label="Домофон"
          />
        </div>
      </div>
    </div>

    <div class="order-step">
      <h3 class="order-step__title">Шаг 3. Выберите дату и время доставки</h3>

      <ChipPicker
        label="Дата доставки"
        :chips-value="test2"
        :name="'deliveryDate'"
        v-model="order.deliveryDate"
        class="order-step__row"
      />
      <ChipPicker
        label="Время доставки"
        :chips-value="test2"
        :name="'deliveryTime'"
        v-model="order.deliveryTime"
        class="order-step__row"
      />
      <div class="needCut-wrap order-step__row">
        <input
          type="checkbox"
          v-model="order.isNeedCut"
          class="checkbox"
          id="needCutId"
        />
        <label for="needCutId">Порезать дольками (опционально)</label>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.order-step {
  margin: 2rem 0;
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
  padding: 1.8rem;

  box-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12),
    0px 10px 32px -4px rgba(24, 39, 75, 0.1);

  &__row {
    margin: 1.5rem 0;
  }
}
.range-control {
  max-width: 320px;
}

.weight-input {
  display: grid;
  grid-template-columns: repeat(2, 100px);
  column-gap: 10px;
}

.second-step {
  max-width: 450px;
}
.user-info {
  display: grid;
  row-gap: 1.5rem;
}
.address-details {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  column-gap: 12px;
}

.needCut-wrap {
  display: flex;
  align-items: center;
}

.checkbox {
  width: 18px;
  height: 18px;
  margin-right: 10px;
}
</style>
