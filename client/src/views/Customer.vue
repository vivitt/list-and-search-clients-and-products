<script setup>
import { onMounted, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { getClientProducts, getSingleCustomer } from "../services";

const customer = ref({});

const products = ref([])
const route = useRoute();
const id = route.params.id;

defineProps({
  id: String,
});

onMounted(async () => {
  customer.value = await getSingleCustomer(id);
  products.value = await getClientProducts(id);
});
</script>

<template>
  <nav>
    <RouterLink to="/">Torna a clients</RouterLink>
  </nav>
  <section>
    <h2>Dades del client</h2>
    <table >
      <tr>
        <th>Nom</th>
        <td>
          <p>{{ customer.givenName }} {{ customer.familyName1 }}</p>
        </td>
      </tr>
      <tr>
        <th>Identificacio</th>
        <td>
          <p>    <p>{{ customer.docType?.toUpperCase() }} {{ customer.docNum }}</p></p>
        </td>
      </tr>
      <tr>
        <th>Telefon</th>
        <td>
          <p>{{ customer.phone }}</p>
        </td>
      </tr>
      <tr>
        <th>Correu electromic</th>
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
        <th>Nom</th>
        <th>Velocitat</th>
        <th>Cognom</th>
        <th>Email</th>
        <th>Telefon</th>
        <th>Document</th>
        <th>Mes informacio</th>
      </tr>
    <tr v-for="product in products">
        <td>{{ product.productName }}</td>
        <td>{{ product.mbSpeed }}</td>
        <!-- <td>{{ product.familyName1 }}</td>
        <td>{{ product.email }}</td>
        <td>{{ product.phone }}</td>
        <td>{{ product.docType?.toUpperCase() }} {{ customer.docNum }}</td> -->
        <td>
          <RouterLink :to="`/customer/${customer.id}`"
            >Veure productes contractats</RouterLink
          >
        </td>
      </tr>
      </table>
  </section>
</template>

<style></style>
