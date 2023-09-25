import { createApp } from "vue";
import { createPinia } from "pinia";
import "@scss/style.scss";
import router from "./router";
import App from "./App.vue";
import Utils from "./utils/index";
import FontAwesomeIcon from "@utils/fontawesome";
import vue3GoogleLogin from "vue3-google-login";
import vue3Spinner from "vue3-spinner";
const pinia = createPinia();
const app = createApp(App);
app
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .use(vue3GoogleLogin, {
    clientId:
      "79754581908-ck8bsqf8bje473f2agm0omubc6voskjb.apps.googleusercontent.com",
  })
  .use(pinia)
  .use(router)
  .use(vue3Spinner)
  .use(Utils)
  .mount("#app");
