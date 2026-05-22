import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./Home.vue";
import SignUp from "./SignUp.vue";
import LoginPage from "./Login.vue";
import AddPage from "./Add.vue";
import UpdatePage from "./Update.vue";
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
  {
    name: "AddPage",
    component: AddPage,
    path: "/add",
  },
  {
    name: "UpdatePage",
    component: UpdatePage,
    path: "/update",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
