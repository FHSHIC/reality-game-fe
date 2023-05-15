import axios from "axios";
import { router } from "../router/router.js";
import { set, get, del, createStore } from "idb-keyval";

const req = axios.create({
  baseURL: "https://reality-game.fhsh.tp.edu.tw/api",
});

export const getDrama = async () => {
  const dramas = [
    "/dramaDB_level1.json",
    "/dramaDB_level2.json",
    "/dramaDB_level3.json",
    "/dramaDB_level4.json",
    "/dramaDB_level5.json",
    "/dramaDB_level6.json",
  ];
  const customStore = createStore("dramaDB", "levelStore");
  dramas.forEach(async (file) => {
    const res = await fetch(file);
    const data = await res.json();

    const exist = await get(`${file.split(".")[0].split("_")[1]}`, customStore);
    if (exist) {
      if (data.digest === exist.digest) {
        return;
      }

      del(`level${data.level}`, customStore);
    }

    set(`level${data.level}`, data, customStore);
  });
};

export const loginProcess = (email, password) => {
  // TODO: login
  // onsuccess
  router.push("/start");
};

export const registProcess = (email, username, password) => {
  // TODO: regist
  // onsuccess
  router.push("/start");
};

export const checkUserProcess = () => {
  //TODO: check user
  // onsuccess
  router.replace("/start");
  // onfailure
  router.replace("/login");
};

export const logoutProcess = () => {
  // TODO: clear user auth info

  router.replace("/login");
};

export const useGameCodeProcess = (gamecode) => {
  // TODO: gamecode use
  // onsuccess && isCapton
  router.replace("/set-team-name");
  // onsuccess && default
  router.replace("/waiting");
};

export const setTeamNameProcess = (gamecode, teamName) => {
  // TODO: set team name
  // onsuccess
  router.replace({
    path: "/waiting",
    query: {
      status: "wait-start",
    },
  });
};

export const gameStartProcess = (gamecode) => {
  // TODO: start game
  // onsuccess
  router.replace({
    path: "/dialog",
    query: {
      level: 1,
      dramaSeq: 0,
    },
  });
};

export const toGameSettlement = () => {
  // TODO: check game is on settlement stage
  // onsuccess
  router.replace({
    path: "/waiting",
    query: {
      status: "wait-end",
    },
  });
};

export const gameEndProcess = (gamecode) => {
  // TODO: end game
  // update team state, update user game history, and set final time
  // onsuccess
  router.replace({
    path: "/clearance",
  });
};

export const clearanceProcess = () => {
  // TODO: clear drama db
  // TODO: update user status
  // onsuccess
  router.replace({
    path: "/start",
  });
};

export const checkTeamStatusProcess = (gamecode) => {
  // TODO: check team status
  // onfailure
  router.replace("/check-user");
};
