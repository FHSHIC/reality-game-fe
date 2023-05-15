import { reacitve } from "vue";

export const userStatus = reacitve({
  username: "",
  accessToken: "",
  gameState: {
    active: false,
    teamId: "",
  },
  gameHistory: [],
});

export const teamStatus = reacitve({
  teamName: "",
  teamMember: {
    email: "username",
  },
  teamState: {
    isActive: false,
    level: 1,
    startTimestamp: 0,
    isFinalLevel: false,
  },
});

export const userDialogStatus = reacitve({
  nowDialogSeq: 0,
  thisLevelDialogLen: 0,
});
