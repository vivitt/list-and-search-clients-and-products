<script setup>
import { ref, onMounted } from "vue";
import { getAllCustomers } from "../services";
import { RouterLink } from "vue-router";

const customerData = ref([]);

onMounted(async () => {
  customerData.value = await getAllCustomers();
});
</script>

<template>
  <section>
    <h1>Llistat dels clients</h1>
    <table>
      <tr>
        <th>Client ID</th>
        <th>Nom</th>
        <th>Cognom(s)</th>
        <th>Correu electrònic</th>
        <th>Telèfon</th>
        <th>Identificació</th>
        <th>Més informació</th>
      </tr>
      <tr v-for="customer in customerData">
        <td>{{ customer.customerId }}</td>
        <td>{{ customer.givenName }}</td>
        <td>{{ customer.familyName1 }}</td>
        <td>{{ customer.email }}</td>
        <td>{{ customer.phone }}</td>
        <td>{{ customer.docType?.toUpperCase() }} {{ customer.docNum }}</td>
        <td>
          <RouterLink :to="`/customer/${customer.customerId}`"
            >Veure productes contractats</RouterLink
          >
        </td>
      </tr>
    </table>
  </section>
</template>

<style></style>
