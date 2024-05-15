<script setup>
import { ref } from "vue";

const props = defineProps(["orderByProperty"]);
const orderAscending = ref(true);

const emit = defineEmits(["order"]);

const clickHandler = () => {
  orderAscending.value = !orderAscending.value;
  emit(
    "order",
    orderAscending.value ? "ascending" : "descending",
    props.orderByProperty
  );
};
</script>

<template>
  <button @click="clickHandler">
    {{ orderAscending ? "🔼" : "🔽" }}
  </button>
</template>
