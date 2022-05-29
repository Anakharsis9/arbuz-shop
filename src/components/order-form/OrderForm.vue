<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

import { createOrder } from "@/api";

import TextField from "../ui/TextField.vue";
import CounterField from "../ui/CounterField.vue";
import RangeSlider from "../ui/RangeSlider.vue";
import ChipPicker from "../ui/ChipPicker.vue";
import Modal from "../Modal.vue";

import { useOrderValidators } from "./useOrderValidators";
import { useOrderData } from "./useOrderData";

const slider = ref(null);
function setWeight(minVal, maxVal) {
  if (!slider.value) return;

  slider.value.setRange(minVal, maxVal);
}

const { deliveryDates, deliveryTimeRanges, order, resetOrderData } =
  useOrderData();
const { v$ } = useOrderValidators(order.value);

const isLoading = ref(false);
const showModal = ref(false);
const responseStatus = ref(0);

async function sendForm() {
  const result = await v$.value.$validate();
  if (!result) return;

  isLoading.value = true;
  showModal.value = true;

  const { status } = await createOrder({ id: uuidv4(), ...order.value });
  responseStatus.value = status;

  if (status === 200) {
    resetOrderData();
    v$.value.$reset();
  }

  isLoading.value = false;
}
</script>

<template>
  <modal v-show="showModal" @close="showModal = false">
    <template v-slot:body>
      <div v-if="isLoading" class="loader response">
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div
        v-if="!isLoading && responseStatus === 200"
        class="response response--success"
      >
        Ура! Заказ оформлен, ожидайте доставку!
      </div>
      <div
        v-if="!isLoading && responseStatus === 400"
        class="response response--reject"
      >
        К сожалению, арбузов по вашему запросу не нашлось.
      </div>
    </template>
  </modal>

  <form @submit.prevent="sendForm" action="submit" class="form">
    <div class="order-step">
      <h3 class="order-step__title">Шаг 1. Укажите количество арбузов</h3>
      <div class="form-group order-step__row">
        <CounterField v-model="order.itemsCount" />
        <div
          class="input-errors"
          v-for="error of v$.itemsCount.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
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
          :max="15"
          :step="1"
          :gap="1"
        />
      </div>
    </div>
    <div class="order-step">
      <h3 class="order-step__title">Шаг 2. Укажите контакты</h3>
      <div class="second-step">
        <div class="user-info order-step__row">
          <div class="form-group">
            <TextField
              v-model="order.userInfo.phone"
              label="Номер телефона*"
              type="tel"
              v-maska="'+7 (###) ###-####'"
              placeholder="+7"
            />
            <div
              class="input-errors"
              v-for="error of v$.userInfo.phone.$errors"
              :key="error.$uid"
            >
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>

          <div class="form-group">
            <TextField v-model="order.userInfo.address.street" label="Адрес*" />
            <div
              class="input-errors"
              v-for="error of v$.userInfo.address.street.$errors"
              :key="error.$uid"
            >
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
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
        :chips-value="deliveryDates"
        :name="'deliveryDate'"
        v-model="order.deliveryDate"
        class="order-step__row"
      />
      <ChipPicker
        label="Время доставки"
        :chips-value="deliveryTimeRanges"
        :name="'deliveryTime'"
        v-model="order.deliveryTime"
        class="order-step__row"
      />
      <div class="needCut-wrap">
        <input
          type="checkbox"
          v-model="order.isNeedCut"
          class="checkbox"
          id="needCutId"
        />
        <label for="needCutId">Порезать дольками (опционально)</label>
      </div>
      <button type="submit" class="btn btn--main">Оформить заказ</button>
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
  @media (max-width: 576px) {
    padding: 1rem;
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
  margin: 2rem 0;
  display: flex;
  align-items: center;
}

.checkbox {
  width: 18px;
  height: 18px;
  margin-right: 10px;
}

.input-errors {
  margin: 12px 0;
  .error-msg {
    color: red;
  }
}

.response {
  font-size: 1.1rem;
  text-align: center;
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: $primary-color;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
