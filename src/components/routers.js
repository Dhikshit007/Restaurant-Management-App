import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./Home.vue";
import SignUp from "./SignUp.vue";
import LoginPage from "./Login.vue";
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
  {
    name: "Login",
    component: LoginPage,
    path: "/Login",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
