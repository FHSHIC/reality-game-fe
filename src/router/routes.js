import IndexPage from "../page/IndexPage.vue";
import StartPage from "../page/StartPage.vue";
import NotFoundPage from "../page/NotFoundPage.vue";
import LoginPage from "../page/LoginPage.vue";
import RegistPage from "../page/RegistPage.vue";
import CheckDramaStatus from "../page/CheckDramaStatus.vue";
import CheckUserStatus from "../page/CheckUserStatus.vue";
import CheckTeamStatus from "../page/CheckTeamStatus.vue";
import GameCodePage from "../page/GameCodePage.vue";
import SetTeamNamePage from "../page/SetTeamNamePage.vue";
import WaitingPlayerPage from "../page/WaitingPlayerPage.vue";
import DialogPage from "../page/DialogPage.vue";
import AnswerPage from "../page/AnswerPage.vue";
import HintChoicePage from "../page/HintChoicePage.vue";
import HintDetailPage from "../page/HintDetailPage.vue";
import TruePage from "../page/TruePage.vue";
import FalsePage from "../page/FalsePage.vue";
import Clearance from "../page/Clearance.vue";

import Clear from "../page/Clear.vue";

export const routes = [
  {
    path: "/",
    component: IndexPage,
  },
  {
    path: "/clear",
    component: Clear,
  },
  {
    path: "/check-drama",
    component: CheckDramaStatus,
  },
  {
    path: "/check-user",
    component: CheckUserStatus,
  },
  {
    path: "/check-team/:gamecode",
    component: CheckTeamStatus,
  },
  {
    path: "/start",
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
    path: "/gamecode",
    component: GameCodePage,
  },
  {
    path: "/set-team-name",
    component: SetTeamNamePage,
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
    path: "/answer",
    component: AnswerPage,
  },
  {
    path: "/hints",
    component: HintChoicePage,
  },
  {
    path: "/hint",
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
    path: "/clearance",
    component: Clearance,
  },
  {
    path: "/:pathMatch(.*)*",
    components: { default: NotFoundPage },
  },
];
