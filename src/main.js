import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router/router.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

document.body.addEventListener(
  "touchmove",
  function (event) {
    // 获取触摸位置的变化
    var touchChange = event.changedTouches[0];
    var startX = touchChange.pageX;
    var startY = touchChange.pageY;

    // 在 touchstart 事件发生时记录起始位置
    event.target.addEventListener(
      "touchstart",
      function (event) {
        startX = event.touches[0].pageX;
        startY = event.touches[0].pageY;
      },
      false
    );

    // 在 touchmove 事件发生时计算位置变化
    event.target.addEventListener(
      "touchmove",
      function (event) {
        var moveX = event.touches[0].pageX - startX;
        var moveY = event.touches[0].pageY - startY;

        // 如果 X 方向的移动大于 Y 方向，则阻止事件的默认行为
        if (Math.abs(moveX) > Math.abs(moveY)) {
          event.preventDefault();
          event.stopPropagation();
        }
      },
      false
    );
  },
  false
);

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
