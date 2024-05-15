<script setup>
import { onMounted, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { getSingleCustomer } from "../services";

const customer = ref({});
const route = useRoute();
const id = route.params.id;

defineProps({
  id: String,
});

onMounted(async () => {
  console.log("hola", id);
  customer.value = await getSingleCustomer(id);
});
</script>

<template>
  <RouterLink to="/">Torna a clients</RouterLink>
  <h2>Client Details</h2>
  <div>
    <!-- The current route is accessible as $route in the template -->
    User {{ id }}
  </div>
  <section>
    <p>{{ customer.givenName }}</p>
    <p>{{ customer.familyName1 }}</p>
    <p>{{ customer.email }}</p>
    <p>{{ customer.phone }}</p>
    <p>{{ customer.docType }}: {{ customer.docNum }}</p>
  </section>
</template>

<style></style>
