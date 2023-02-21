import CreateAccountPage from "./pages/CreateAccount.vue";
import SingInPage from "./pages/SignInPage.vue";
import StartPage from "./pages/StartPage.vue";
import GameCodePage1 from "./pages/GameCodePage1.vue";
import GameCodePage2 from "./pages/GameCodePage2.vue";
import WaitingPlayerPage from "./pages/WaitingPlayerPage.vue";
import DialogPage from "./pages/DialogPage.vue";
import AsidePage from "./pages/AsidePage.vue";
import Answer from "./pages/Answer.vue";
import HintChoicePage from "./pages/HintChoicePage.vue";
import True from "./pages/True.vue";
import False from "./pages/False.vue";
import HintDetailPage from "./pages/HintDetailPage.vue";

import NotFound from "./pages/NotFound.vue";
import LoginPage from "./pages/LoginPage.vue";
import HintPage from "./pages/HintPage.vue";
import AnswerPage from "./pages/AnswerPage.vue";

export const routes = [
  {
    path: "/CreateAccount",
    component: CreateAccountPage,
  },
  {
    path: "/SignIn",
    component: SingInPage,
  },
  {
    path: "/start",
    component: StartPage,
  },
  {
    path: "/GameCode1",
    component: GameCodePage1,
  },
  {
    path: "/GameCode2",
    component: GameCodePage2,
  },
  {
    path: "/WaitingPlayer",
    component: WaitingPlayerPage,
  },
  {
    path: "/dialog",
    component: DialogPage,
  },
  {
    path: "/aside",
    component: AsidePage,
  },
  {
    path: "/answer",
    component: Answer,
  },
  {
    path: "/HintChoice",
    component: HintChoicePage,
  },
  {
    path: "/true",
    component: True,
  },
  {
    path: "/false",
    component: False,
  },
  {
    path: "/HintDetail",
    component: HintDetailPage,
  },

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
    path: "/AnswerPage",
    component: AnswerPage,
  },
];
