import NotFound from "./pages/NotFound.vue";
import LoginPage from "./pages/LoginPage.vue";

export const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/register",
  },
];
