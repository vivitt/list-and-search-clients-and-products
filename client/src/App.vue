<script setup>
import { ref, onMounted } from "vue";
import { getAllCustomers, getClientProducts } from "./services";
import Home from "./views/Home.vue";
import Customer from "./views/Customer.vue";
const customerData = ref([]);
const customer = ref({});
const productData = ref([]);

onMounted(async () => {
  const id = 555555;
  customerData.value = await getAllCustomers();
  customer.value = customerData.value.filter((el) => el.id === id);
  productData.value = await getClientProducts(customer.value.id);
});

console.log(customer.value);
</script>

<template>
  <Home :customers="customerData"></Home>
  <Customer :customer="customer" :products="productData"></Customer>
</template>

<style></style>
