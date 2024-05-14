<script setup>
import { ref } from "vue";
import { getClientProducts } from "../services/modules/ProductServices";

const props = defineProps(["customer", "products"]);
console.log(props.customer);
</script>

<template>
  <h2>Client Details</h2>
  <section>
    <p>{{ customer.id }}</p>
    <p>{{ customer.givenName }}</p>
    <p>{{ customer.familyName1 }}</p>
    <p>{{ customer.email }}</p>
    <p>{{ customer.phone }}</p>
    <p>{{ customer.docType }}: {{ customer.docNum }}</p>
  </section>
</template>

<style></style>
