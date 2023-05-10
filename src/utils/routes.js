// import HomePage from "../pages/HomePage.vue";
import StartPage from "../pages/StartPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegistPage from "../pages/RegistPage.vue";
import GameCodePage1 from "../pages/GameCodePage1.vue";
import GameCodePage2 from "../pages/GameCodePage2.vue";
import WaitingPlayerPage from "../pages/WaitingPlayerPage.vue";
import DialogPage from "../pages/DialogPage.vue";
import AsidePage from "../pages/AsidePage.vue";
import AnswerPage from "../pages/AnswerPage.vue";
import HintChoicePage from "../pages/HintChoicePage.vue";
import HintDetailPage from "../pages/HintDetailPage.vue";
import TruePage from "../pages/TruePage.vue";
import FalsePage from "../pages/FalsePage.vue";
import Clearance from "../pages/Clearance.vue";

export const routes = [
  {
    path: "/:pathMatch(.*)*",
    components: { default: NotFoundPage },
  },
  {
    path: "/",
    component: StartPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/signup",
    component: RegistPage,
  },
  {
    path: "/gamecode",
    component: GameCodePage1,
  },
  {
    path: "/teamname",
    component: GameCodePage2,
  },
  {
    path: "/waiting",
    component: WaitingPlayerPage,
  },
  {
    path: "/dialog",
    component: DialogPage,
  },
  {
    path: "/self-dialog",
    component: AsidePage,
  },
  {
    path: "/answer",
    component: AnswerPage,
  },
  {
    path: "/hints",
    component: HintChoicePage,
  },
  {
    path: "/hint-detail",
    component: HintDetailPage,
  },
  {
    path: "/true",
    component: TruePage,
  },
  {
    path: "/false",
    component: FalsePage,
  },
  {
    path: "/gameclear",
    component: Clearance,
  },
];
