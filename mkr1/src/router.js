import { createRouter, createWebHashHistory } from "vue-router";

import Main from "./pages/Main/index.vue";
import Add from "./pages/Add/index.vue";
import Edit from "./pages/Edit/index.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/add",
    name: "add",
    component: Add,
  },
  {
    path: "/edit/:id?",
    name: "edit",
    component: Edit,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
