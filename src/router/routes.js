import StartPage from "../page/StartPage.vue";
import NotFoundPage from "../page/NotFoundPage.vue";
import LoginPage from "../page/LoginPage.vue";
import RegistPage from "../page/RegistPage.vue";

export const routes = [
  {
    path: "/",
    component: StartPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/regist",
    component: RegistPage,
  },
  {
    path: "/:pathMatch(.*)*",
    components: { default: NotFoundPage },
  },
];
