<script setup>
import { ref, onMounted, watch } from "vue";
import { getAllCustomers } from "../services";
import { RouterLink } from "vue-router";
import OrderButton from "../components/OrderButton.vue";
import CustomerFilter from "../components/CustomerFilter.vue";
import Spinner from "../components/Spinner.vue";
import ErrorMessage from "../components/ErrorMessage.vue";

const customerData = ref([]);
const loading = ref(false);
const error = ref(null);

const filteredCustomers = ref(customerData.value);

const filterQuery = ref("");

const orderDirections = {
  up: "ascending",
  down: "descending",
};

async function fetchData() {
  error.value = null;
  loading.value = true;

  try {
    customerData.value = await getAllCustomers();
    filteredCustomers.value = customerData.value;
  } catch (err) {
    error.value = `❌ S'ha produït un error: ${err.toString()}`;
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchData();
});

const sortAscending = (value, property) => {
  filteredCustomers.value.sort((a, b) => {
    if (a[property] > b[property]) {
      return 1;
    }
    if (b[property] > a[property]) {
      return -1;
    }
    return 0;
  });
};

const sortDescending = (value, property) => {
  filteredCustomers.value.sort((a, b) => {
    if (a[property] > b[property]) {
      return -1;
    }
    if (b[property] > a[property]) {
      return 1;
    }
    return 0;
  });
};

const sortByProperty = (value, property) => {
  value === orderDirections.up
    ? sortAscending(value, property)
    : sortDescending(value, property);
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
      <tr v-if="loading">
        <Spinner></Spinner>
      </tr>

      <tr v-else>
        <th>
          <div>
            Client ID
            <OrderButton
              @order="sortByProperty"
              orderByProperty="customerId"
            ></OrderButton>
          </div>
        </th>
        <th>
          <div>
            Nom
            <OrderButton
              @order="sortByProperty"
              orderByProperty="givenName"
            ></OrderButton>
          </div>
        </th>
        <th>
          <div>
            Cognom(s)
            <OrderButton
              @order="sortByProperty"
              orderByProperty="familyName"
            ></OrderButton>
          </div>
        </th>
        <th>Correu electrònic</th>
        <th>Telèfon</th>
        <th>Identificació</th>
        <th>Més informació</th>
      </tr>

      <ErrorMessage v-if="error !== null" :message="error"></ErrorMessage>

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
