<script setup>
import { ref, onMounted } from "vue";
import { getAllCustomers } from "../services";
import { RouterLink } from "vue-router";
import OrderButton from "../components/OrderButton.vue";

const customerData = ref([]);
const filteredCustomers = ref(customerData.value);

onMounted(async () => {
  customerData.value = await getAllCustomers();
  filteredCustomers.value = customerData.value;
});

const sortByProperty = () => {
  filteredCustomers.value.sort((a, b) => {
    return -1;
  });
};
</script>

<template>
  <section>
    <h1>Llistat dels clients</h1>
    <table>
      <tr>
        <th>
          Client ID
          <OrderButton @order="sortByProperty()"></OrderButton>
        </th>
        <th>
          Nom
          <OrderButton @order="sortByProperty()"></OrderButton>
        </th>
        <th>
          Cognom(s)
          <OrderButton @order="sortByProperty()"></OrderButton>
        </th>
        <th>Correu electrònic</th>
        <th>Telèfon</th>
        <th>Identificació</th>
        <th>Més informació</th>
      </tr>
      <tr v-for="customer in filteredCustomers">
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
