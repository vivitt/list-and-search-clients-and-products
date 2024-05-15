<script setup>
import { ref, onMounted, watch } from "vue";
import { getAllCustomers } from "../services";
import { RouterLink } from "vue-router";
import OrderButton from "../components/OrderButton.vue";
import CustomerFilter from "../components/CustomerFilter.vue";

const orderCustomers = {
  ascending: 1,
  descending: -1,
};

const orderAscending = ref(true);

const customerData = ref([]);
const filteredCustomers = ref(customerData.value);

const filterQuery = ref("");

onMounted(async () => {
  customerData.value = await getAllCustomers();
  filteredCustomers.value = customerData.value;
});

const sortByProperty = (value, property) => {
  filteredCustomers.value.sort((a, b) => {
    const propertyA = a[property];
    const propertyB = b[property];

    console.log(propertyA);
    if (value.ascending) {
      if (propertyA > propertyB) {
        return value.ascending;
      } else {
        return value.descending;
      }
    } else {
      if (propertyA > propertyB) {
        return value.descending;
      } else {
        return value.ascending;
      }
    }
  });
};

const filterCustomers = () => {
  filteredCustomers.value = customerData.value.filter((customer) => {
    let customerString =
      customer.givenName +
      customer.familyName +
      customer.customerId +
      customer.docNum +
      customer.phone;
    return customerString
      .toLowerCase()
      .includes(filterQuery.value.trim().toLowerCase());
  });
};

watch(filterQuery, () => {
  filterCustomers();
});
</script>

<template>
  <section>
    <h1>Llistat dels clients</h1>
    <CustomerFilter
      v-model:query.capitalize="filterQuery"
      @clear="filterQuery = ''"
    ></CustomerFilter>

    <table>
      <tr>
        <th>
          Client ID
          <OrderButton
            @order="sortByProperty"
            orderByProperty="customerId"
          ></OrderButton>
        </th>
        <th>
          Nom
          <OrderButton
            @order="sortByProperty"
            orderByProperty="givenName"
          ></OrderButton>
        </th>
        <th>
          Cognom(s)
          <OrderButton
            @order="sortByProperty"
            orderByProperty="familyName"
          ></OrderButton>
        </th>
        <th>Correu electrònic</th>
        <th>Telèfon</th>
        <th>Identificació</th>
        <th>Més informació</th>
      </tr>
      <tr v-for="customer in filteredCustomers">
        <td>{{ customer.customerId }}</td>
        <td>{{ customer.givenName }}</td>
        <td>{{ customer.familyName }}</td>
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
