import { reactive } from "vue";
import { get } from "idb-keyval";
import { customStore } from "./dramaDB";

export const getUserStatusFromStorage = () => {
  const userState = localStorage.getItem("userStatus");
  return JSON.parse(userState);
};

export const updateUserStatusToStorage = (userData) => {
  localStorage.setItem("userStatus", JSON.stringify(userData));
};

export const delUserStatusFromStorage = () => {
  localStorage.removeItem("userStatus");
};

export const getTeamStatusFromStorage = () => {
  const teamState = localStorage.getItem("teamStatus");
  return JSON.parse(teamState);
};

export const updateTeamStatusToStorage = (teamData) => {
  localStorage.setItem("teamStatus", JSON.stringify(teamData));
};

export const delTeamStatusFromStorage = () => {
  localStorage.removeItem("teamStatus");
};

export const waitStatus = reactive({
  isStart: false,
  onWaitMember: [],
  team: {},
  btnText: "",
});

export const getDramaContentFromIndexedDB = async (level) => {
  const levelString = `level${level}`;
  const levelDrama = await get(levelString, customStore);
  return levelDrama;
};

// export const dialogSpeak = reactive({
//   speaker: "",
//   speach: "",
//   speakerImage: "",
//   isAllPage: false,
// });
