<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import { getClientProducts, getSingleCustomer } from "../services";

const customer = ref({});

const products = ref([]);

const props = defineProps({
  id: String,
});

onMounted(async () => {
  customer.value = await getSingleCustomer(props.id);
  products.value = await getClientProducts(props.id);
});
</script>

<template>
  <nav>
    <RouterLink to="/">Torna al llistat de clients</RouterLink>
  </nav>
  <section>
    <h2>Dades del client</h2>
    <table>
      <tr>
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
      <tr>
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
