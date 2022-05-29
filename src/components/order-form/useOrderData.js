import { ref, onMounted, watch, computed } from "vue";

export const useOrderData = () => {
  const deliveryDates = Array.from({ length: 10 }, (_, i) => {
    const currentDate = new Date();
    if (currentDate.getHours() > 18)
      currentDate.setDate(currentDate.getDate() + 1);

    currentDate.setDate(currentDate.getDate() + i);
    return currentDate.toLocaleDateString("ru", {
      month: "long",
      day: "numeric",
    });
  });

  function makeInitialOrder() {
    return {
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
      deliveryDate: deliveryDates[0],
      deliveryTime: "",
      isNeedCut: false,
    };
  }

  const order = ref(makeInitialOrder());

  function resetOrderData() {
    order.value = makeInitialOrder();
  }

  function getTimeRanges(start, end, gap) {
    const result = [];
    for (let i = start; i <= end - gap; i++) {
      const timeRange = `${i}:00 - ${i + gap}:00`;
      result.push(timeRange);
    }
    return result;
  }

  const deliveryTimeRanges = computed(() => {
    if (order.value.deliveryDate === deliveryDates[0]) {
      const currentDateHour = new Date().getHours();
      const start = currentDateHour > 8 ? currentDateHour + 2 : 10;
      return getTimeRanges(start, 22, 2);
    }
    return getTimeRanges(9, 22, 2);
  });

  onMounted(() => {
    order.value.deliveryTime = deliveryTimeRanges.value[0] ?? "";
  });

  watch(deliveryTimeRanges, () => {
    order.value.deliveryTime = deliveryTimeRanges.value[0] ?? "";
  });

  return {
    deliveryDates,
    deliveryTimeRanges,
    order,
    resetOrderData,
  };
};
