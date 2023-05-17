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

export const updateLevelStatusToStorage = (levelData) => {
  localStorage.setItem("levelStatus", JSON.stringify(levelData));
};

export const getLevelStatusFromStorage = () => {
  return JSON.parse(localStorage.getItem("levelStatus"));
};

export const removeLevelStatusFromStorage = () => {
  localStorage.removeItem("levelStatus");
};

export const updateAllHintGotToStorage = (hintId) => {
  const allHintGot = JSON.parse(localStorage.getItem("allHintGot"));
  if (!allHintGot) {
    const tmpHintGot = [];
    tmpHintGot.push(hintId);
    localStorage.setItem("allHintGot", JSON.stringify(tmpHintGot));
    return;
  }
  allHintGot.push(hintId);
  localStorage.setItem("allHintGot", JSON.stringify(allHintGot));
};

export const getAllHintGotFromStorage = () => {
  return JSON.parse(localStorage.getItem("allHintGot"));
};

export const updateHintByIdToStorage = (hintId, hintContent) => {
  localStorage.setItem(hintId, hintContent);
};

export const getHintByIdFromStorage = (hintId) => {
  return localStorage.getItem(hintId);
};

export const clearHintFromStorage = () => {
  const hintList = JSON.parse(localStorage.getItem("allHintGot"));
  if (!hintList) {
    return;
  }
  hintList.forEach((hint) => {
    localStorage.removeItem(hint);
  });
  localStorage.removeItem("allHintGot");
};
