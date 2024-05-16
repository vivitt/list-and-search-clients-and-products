<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import { getClientProducts, getSingleCustomer } from "../services";
import Spinner from "../components/Spinner.vue";
import ErrorMessage from "../components/ErrorMessage.vue";

const props = defineProps({
  id: String,
});
const customer = ref({});

const products = ref([]);

const loading = ref(false);
const error = ref(null);

async function fetchData(id) {
  error.value = null;
  loading.value = true;

  try {
    customer.value = await getSingleCustomer(id);
    products.value = await getClientProducts(id);
  } catch (err) {
    error.value = `❌ S'ha produït un error: ${err.toString()}`;
  } finally {
    loading.value = false;
  }
}

onMounted(async () => {
  fetchData(props.id);
});
</script>

<template>
  <nav>
    <RouterLink to="/">Torna al llistat de clients</RouterLink>
  </nav>
  <section>
    <ErrorMessage v-if="error !== null" :message="error"></ErrorMessage>

    <h2>Dades del client</h2>
    <table>
      <tr v-if="loading">
        <Spinner></Spinner>
      </tr>
      <tr v-else>
        <th>Nom</th>
        <td>
          <p>{{ customer.givenName }} {{ customer.familyName1 }}</p>
        </td>
      </tr>
      <tr>
        <th>Identificació</th>
        <td>
          <p>{{ customer.docType?.toUpperCase() }} {{ customer.docNum }}</p>
        </td>
      </tr>
      <tr>
        <th>Telèfon</th>
        <td>
          <p>{{ customer.phone }}</p>
        </td>
      </tr>
      <tr>
        <th>Correu electrònic</th>
        <td>
          <p>{{ customer.email }}</p>
        </td>
      </tr>
    </table>
  </section>
  <section>
    <h2>Productes contractats</h2>
    <table>
      <tr v-if="loading">
        <Spinner></Spinner>
      </tr>
      <tr v-else>
        <th>Nom del producte</th>
        <th>Velocitat</th>
        <th>GB data</th>
        <th>Tipus de producte</th>
        <th>Numeració Terminal</th>
        <th>Data de venda</th>
      </tr>
      <tr v-for="product in products">
        <td>{{ product.productName }}</td>
        <td>{{ product.mbSpeed }}</td>
        <td>{{ product.gbData }}</td>
        <td>{{ product.productTypeName }}</td>
        <td>{{ product.numeracioTerminal }}</td>
        <td>
          {{ product.soldAt }}
        </td>
      </tr>
    </table>
  </section>
</template>

<style></style>
