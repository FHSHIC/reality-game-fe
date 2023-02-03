import NotFound from "./pages/NotFound.vue";
import LoginPage from "./pages/LoginPage.vue";
import HintPage from "./pages/HintPage.vue";
import AnswerPage from "./pages/AnswerPage.vue";
import DialogPage from "./pages/DialogPage.vue";

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
  {
    path: "/hint/:levelId",
    component: HintPage,
  },
  {
    path: "/answer",
    component: AnswerPage,
  },
  {
    path: "/dialog",
    component: DialogPage,
  },
];
