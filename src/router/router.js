import { createRouter, createWebHistory } from "vue-router";
import { getUserStatusFromStorage } from "../utils/status";
import { routes } from "./routes";

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  if (
    to.path !== "/" &&
    to.path !== "/login" &&
    to.path !== "/regist" &&
    to.path !== "/clear" &&
    to.path !== "/check-user"
  ) {
    if (!getUserStatusFromStorage()) {
      router.replace({
        path: "/",
      });
    }
  }
});
