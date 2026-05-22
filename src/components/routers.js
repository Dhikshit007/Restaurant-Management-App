import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./Home.vue";
import SignUp from "./SignUp.vue";
const routes = [
  {
    name: "HomePage",
    component: HomePage,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/signUp",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
