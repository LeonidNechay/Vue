import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { v4 as uuidv4 } from "uuid";

createApp(App).use(router).use(store).use(uuidv4).mount("#app");
