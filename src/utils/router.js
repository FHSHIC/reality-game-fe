import { createRouter, createWebHistory } from "vue-router";

import { routes } from "./routes.js";

import {
  getUserStatusProcess,
  notifyEvent,
  getTeamStatusProcess,
} from "./api.js";
import { userStatus, teamStatus } from "./status.js";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  window.scrollTo(0, 0);

  if (to.path !== "/" && to.path !== "/login" && to.path !== "/signup") {
    await getUserStatusProcess();
  }

  if (to.path === "/login" || to.path === "/signup") {
    if (!userStatus.data) {
      next();
      return;
    }
    if (Object.keys(userStatus.data.userState).length === 0) {
      router.push({ path: "/gamecode" });
      next();
      return;
    }

    await getTeamStatusProcess();
    router.push({
      path: "/dialog",
      query: {
        nowDramaId: teamStatus.data.nowDramaId,
        counter: 0,
        nowScene: 0,
      },
    });
    next();
    return;
  }

  if (to.path === "/gamecode") {
    if (Object.keys(userStatus.data.userState).length === 0) {
      next();
      return;
    }

    await getTeamStatusProcess();
    router.push({
      path: "/dialog",
      query: {
        nowDramaId: teamStatus.data.nowDramaId,
        counter: 0,
        nowScene: 0,
      },
    });
    next();
    return;
  }

  if (from.path === "/waiting") {
    notifyEvent("closeWs", {});
  }

  next();
});

export default router;
