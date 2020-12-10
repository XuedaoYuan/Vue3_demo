import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import SayHi from "@/components/SayHi.vue";

const app = createApp(App);
app.component("say-hi", SayHi);
app
  .use(store)
  .use(router)
  .mount("#app");
