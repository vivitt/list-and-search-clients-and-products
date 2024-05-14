<script setup>
import { ref, onMounted } from "vue";
import { getAllCustomers } from "./services";
import Home from "./views/Home.vue";

const customers = ref([]);

onMounted(async () => {
  customers.value = await getAllCustomers();
});
</script>

<template>
  <Home :customers="customers"></Home>
</template>

<style></style>
