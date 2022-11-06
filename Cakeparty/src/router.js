import { createRouter, createWebHashHistory } from "vue-router";

import Main from "./pages/Main/index.vue";
import Roles from "./pages/Roles/index.vue";
import Rules from "./pages/Rules/index.vue";
import AddRole from "./pages/AddRole";
import EditRole from "./pages/EditRole";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/roles",
    name: "roles",
    component: Roles,
  },
  {
    path: "/rules",
    name: "rules",
    component: Rules,
  },
  {
    path: "/add/:id?",
    name: "add",
    component: AddRole,
  },
  {
    path: "/add/:id?/:roleid?",
    name: "edit",
    component: EditRole,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
