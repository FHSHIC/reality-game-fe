import StartPage from "../page/StartPage.vue";
import NotFoundPage from "../page/NotFoundPage.vue";
import LoginPage from "../page/LoginPage.vue";
import RegistPage from "../page/RegistPage.vue";
import CheckStatus from "../page/CheckStatus.vue";
import GameCodePage from "../page/GameCodePage.vue";
import SetTeamNamePage from "../page/SetTeamNamePage.vue";
import WaitingPlayerPage from "../page/WaitingPlayerPage.vue";
import DialogPage from "../page/DialogPage.vue";
import AnswerPage from "../page/AnswerPage.vue";
import HintChoicePage from "../page/HintChoicePage.vue";
import HintDetailPage from "../page/HintDetailPage.vue";
import TruePage from "../page/TruePage.vue";
import FalsePage from "../page/FalsePage.vue";

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
    path: "/check",
    component: CheckStatus,
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
    path: "/:pathMatch(.*)*",
    components: { default: NotFoundPage },
  },
];
