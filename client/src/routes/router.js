import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "../views/Home.vue";
import Customer from "../views/Customer.vue";

const routes = [
  { path: "/", component: HomeView, props: true },
  { path: "/customer/:id", component: Customer, props: true },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
