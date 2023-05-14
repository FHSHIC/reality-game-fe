import StartPage from "../page/StartPage.vue";
import NotFoundPage from "../page/NotFoundPage.vue";
import LoginPage from "../page/LoginPage.vue";
import RegistPage from "../page/RegistPage.vue";
import CheckStatus from "../page/CheckStatus.vue";
import GameCodePage from "../page/GameCodePage.vue";
import SetTeamNamePage from "../page/SetTeamNamePage.vue";
import WaitingPlayerPage from "../page/WaitingPlayerPage.vue";

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
    path: "/:pathMatch(.*)*",
    components: { default: NotFoundPage },
  },
];
