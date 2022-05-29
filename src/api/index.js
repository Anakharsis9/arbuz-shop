import { v4 as uuidv4 } from "uuid";

const ITEMS_KEY = "watermelons";

function getWatermelons() {
  let watermelonsData = JSON.parse(localStorage.getItem(ITEMS_KEY));
  if (watermelonsData) {
    return watermelonsData;
  }

  const columns = 15;
  const rows = 15;
  watermelonsData = [];

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      const weight = Math.floor(Math.random() * 14 + 1);
      watermelonsData.push({
        id: uuidv4(),
        col: i,
        row: j,
        weight,
        status: weight < 4 ? "unripe" : "ripe",
      });
    }
  }
  localStorage.setItem(ITEMS_KEY, JSON.stringify(watermelonsData));
  return watermelonsData;
}

const watermelons = getWatermelons();

function isRipe(w) {
  return w.status === "ripe";
}

function isInWeightRange(w, range) {
  return w.weight >= range[0] && w.weight <= range[1];
}

function findWatermelons(count, range) {
  return watermelons
    .filter((w) => isRipe(w) && isInWeightRange(w, range))
    .slice(0, count)
    .map((w) => w.id);
}

function collectWatermelons(needCollect) {
  const updated = watermelons.map((w) => {
    if (needCollect.includes(w.id)) {
      w.status = "picked";
    }
    return w;
  });
  localStorage.setItem(ITEMS_KEY, JSON.stringify(updated));
}

export async function createOrder(order) {
  return new Promise((res) => {
    const result = findWatermelons(order.itemsCount, order.weightRange);
    if (result.length === order.itemsCount) collectWatermelons(result);

    setTimeout(() => {
      res({
        status: result.length === order.itemsCount ? 200 : 400,
      });
    }, 2000);
  });
}
