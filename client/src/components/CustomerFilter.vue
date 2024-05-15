<script setup>
import { ref } from "vue";
const query = defineModel("query");
const emit = defineEmits(["clear"]);
</script>

<template>
  <div class="customer-filter">
    <label for="filter"
      >Filtra clients per ID, nom, cognom, telèfon, email, o número de
      document</label
    >
    <div>
      <input type="text" v-model="query" id="filter" />
      <button @click="$emit('clear')" aria-label="clear input">❎</button>
    </div>
  </div>
</template>

<style>
.customer-filter {
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 1.2em;
}
input {
  width: 70vw;
  height: 3vh;
}
</style>
