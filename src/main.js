import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router/router.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

history.pushState(null, null, location.href);
window.onpopstate = function () {
  history.go(1);
};

if (!window.indexedDB) {
  console.log("你的浏览器不支持IndexedDB");
  alert(
    "您的手機瀏覽器可能不支援這款遊戲所需之技術支援，請務必更新瀏覽器或是跟我們的服務人員聯繫！"
  );
}

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
