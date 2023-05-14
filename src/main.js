import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

// document.documentElement.style.setProperty(
//   "--vh",
//   window.innerHeight * 0.01 + "px"
// );

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
