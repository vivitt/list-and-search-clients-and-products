<script setup>
import { ref } from "vue";

const props = defineProps({
  property: String,
});

const orderAscending = ref(true);
const emit = defineEmits(["order"]);

const clickHandler = () => {
  emit("order");
  orderAscending.value = !orderAscending.value;
};
</script>

<template>
  <button @click="clickHandler">
    {{ orderAscending ? "🔼" : "🔽" }}
  </button>
</template>
