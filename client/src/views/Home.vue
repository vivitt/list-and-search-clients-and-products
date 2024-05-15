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
  <h2>Home</h2>
  <table>
    <tr>
      <th>Client Id</th>
      <th>Nom</th>
      <th>Cognom</th>
      <th>Email</th>
      <th>Telefon</th>
      <th>Document</th>
      <th>Mes informacio</th>
    </tr>
    <tr v-for="customer in customerData">
      <td>{{ customer.id }}</td>
      <td>{{ customer.givenName }}</td>
      <td>{{ customer.familyName1 }}</td>
      <td>{{ customer.email }}</td>
      <td>{{ customer.phone }}</td>
      <td>{{ customer.docType }}: {{ customer.docNum }}</td>
      <td>
        <RouterLink :to="`/customer/${customer.id}`"
          >Veure productes contractats</RouterLink
        >
      </td>
    </tr>
  </table>
</template>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
