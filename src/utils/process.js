import axios from "axios";
import { router } from "../router/router.js";
import { set, get, del, clear } from "idb-keyval";
import { customStore } from "./dramaDB.js";
import {
  getUserStatusFromStorage,
  updateUserStatusToStorage,
  getTeamStatusFromStorage,
  updateTeamStatusToStorage,
  delTeamStatusFromStorage,
  waitStatus,
  getDramaContentFromIndexedDB,
} from "./status.js";

const req = axios.create({
  baseURL: "https://reality-game.fhsh.tp.edu.tw/api",
});

const websocketEndpoint = "wss://reality-game.fhsh.tp.edu.tw/api/team/waiting";

export const getDrama = async () => {
  const dramas = [
    "/dramaDB_level1.json",
    "/dramaDB_level2.json",
    "/dramaDB_level3.json",
    "/dramaDB_level4.json",
    "/dramaDB_level5.json",
    "/dramaDB_level6.json",
  ];

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

export const loginProcess = async (email, password) => {
  // TODO: login
  const data = {
    account: email,
    password,
  };
  try {
    const res = await req.post("/user/login", data);
    updateUserStatusToStorage(res.data);
  } catch (e) {
    console.log(e);
    alert("帳號密碼有誤！");
    return;
  }
  // onsuccess
  router.push("/start");
};

export const registProcess = async (email, username, password) => {
  // TODO: regist
  const data = {
    account: email,
    username,
    password,
  };
  try {
    const res = await req.post("/user/regist", data);
    updateUserStatusToStorage(res.data);
  } catch (e) {
    console.log(e);
    alert("這個帳號已經被註冊過囉！");
    return;
  }
  // onsuccess
  router.push("/start");
};

export const getCurrentUserProcess = async () => {
  //TODO: check user
  const userStatusFromStorage = getUserStatusFromStorage();
  if (!userStatusFromStorage) {
    router.replace("/login");
    return;
  }
  try {
    // onsuccess
    const res = await req.get("/user/me", {
      headers: {
        "access-token": userStatusFromStorage.accessToken,
      },
    });
    updateUserStatusToStorage(res.data);
    router.replace("/start");
    return;
  } catch (e) {
    // onfailure
    router.replace("/login");
    return;
  }
};

export const toGameProcess = () => {
  // TODO: check user state is active
  const userStatus = getUserStatusFromStorage();
  if (!userStatus) {
    router.replace("/login");
  }
  if (userStatus.userState.isActive) {
    router.replace({
      path: `/check-team/${userStatus.userState.gamecode}`,
    });
    return;
  }
  router.replace("/gamecode");
};

export const logoutProcess = () => {
  // TODO: clear user auth info
  localStorage.clear();
  clear(customStore);

  router.replace("/login");
};

export const useGameCodeProcess = async (gamecode) => {
  // TODO: gamecode use
  const userStatus = getUserStatusFromStorage();
  if (!userStatus) {
    router.replace("/login");
    return;
  }

  try {
    const res = await req.post(
      "/team/join-team",
      {
        gamecode,
      },
      {
        headers: {
          "access-token": userStatus.accessToken,
        },
      }
    );
    updateTeamStatusToStorage(res.data);

    if (res.data.isTeamLeader && res.data.teamName === "") {
      // onsuccess && isCapton
      router.replace("/set-team-name");
      return;
    }
    // onsuccess && default
    router.replace({
      path: "/waiting",
      query: {
        status: "wait-start",
      },
    });
    return;
  } catch (e) {
    const errorRes = e.response;
    if (errorRes.status === 404) {
      alert("你不能使用這個遊戲碼，請跟山城實境解謎團隊聯繫！");
      return;
    } else {
      alert("這個遊戲碼已經被使用過了！請跟山城實境解謎團隊聯繫！");
      return;
    }
  }
};

export const setTeamNameProcess = async (gamecode, teamName) => {
  // TODO: set team name
  const userStatus = getUserStatusFromStorage();
  if (!userStatus) {
    router.replace("/login");
    return;
  }

  try {
    const res = await req.post(
      "/team/set-team-name",
      {
        gamecode,
        teamName,
      },
      {
        headers: {
          "access-token": userStatus.accessToken,
        },
      }
    );
    updateTeamStatusToStorage(res.data);
    // onsuccess
    router.replace({
      path: "/waiting",
      query: {
        status: "wait-start",
      },
    });
    return;
  } catch (e) {
    alert("你不能進行設定喔！");
    router.replace({
      path: "/waiting",
      query: {
        status: "wait-start",
      },
    });
  }
};

export const waitMember = async (waitState) => {
  const teamStatus = getTeamStatusFromStorage();
  const userStatus = getUserStatusFromStorage();
  const ws = new WebSocket(
    `${websocketEndpoint}/${teamStatus.gamecode}/${userStatus.account}`
  );
  ws.onerror = (e) => {
    if (waitState === "wait-start") {
      router.replace({
        path: "/gamecode",
      });
    }
    if (waitState === "wait-end") {
      router.replace({
        path: "/dialog",
        query: {
          level: teamStatus.nowLevel,
          dramaSeq: 0,
          dialogSeq: 0,
        },
      });
    }
  };
  ws.onmessage = async (e) => {
    const rtData = JSON.parse(e.data);
    if (waitState === "wait-start") {
      waitStatus.btnText = "開始遊戲";
      if (rtData.isStart) {
        router.replace({
          path: "/check-drama",
        });
      }
    }
    if (waitState === "wait-end") {
      waitStatus.btnText = "結算遊戲";
      if (rtData.isEnd) {
        router.replace({
          path: "/check-game-end",
        });
      }
    }
    waitStatus.isStart = rtData.isStart;
    waitStatus.onWaitMember = rtData.onWaitMember;
    waitStatus.team = rtData.team;
    waitStatus.waitState = waitState;
  };
  window.addEventListener("leave-waiting", (e) => {
    console.log(e);
    if (!e.detail.isStart && waitState !== "wait-end") {
      delTeamStatusFromStorage();
    }
    ws.close();
  });
};

export const gameStartProcess = async () => {
  // TODO: start game
  const teamStatus = getTeamStatusFromStorage();
  const userStatus = getUserStatusFromStorage();

  try {
    await req.post(
      "/team/start-game",
      {
        gamecode: teamStatus.gamecode,
      },
      {
        headers: {
          "access-token": userStatus.accessToken,
        },
      }
    );
  } catch (e) {
    const errorRes = e.response;
    if (errorRes.status === 403) {
      alert("你沒有權限可以開始遊戲喔！");
      return;
    }
    alert("系統產生異常，請跟山城實境解謎團隊聯繫！");
  }
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

export const gameEndProcess = async () => {
  // TODO: end game and set final time
  teamStatus = getTeamStatusFromStorage();
  userStatus = getUserStatusFromStorage();
  try {
    await req.post(
      "/team/game-finish",
      {
        gamcode: teamStatus.gamecode,
      },
      {
        headers: {
          "access-token": userStatus.accessToken,
        },
      }
    );
  } catch (e) {
    console.log(e);
  }
  // 不需要額外的 redirect，在 websocket 有設定了
};

export const clearanceProcess = () => {
  // TODO: clear drama db
  // update team state, update user game history
  // onsuccess
  router.replace({
    path: "/start",
  });
};

export const getTeamStatusProcess = async (gamecode, checkDrama = true) => {
  // TODO: check team status
  const userStatus = getUserStatusFromStorage();
  if (!userStatus) {
    router.replace("/login");
    return;
  }
  try {
    const res = await req.get(`/team/${gamecode}`, {
      headers: {
        "access-token": userStatus.accessToken,
      },
    });
    updateTeamStatusToStorage(res.data);
    if (checkDrama) {
      router.replace({
        path: "/check-drama",
      });
    }
    return;
  } catch (e) {
    // onfailure
    router.replace("/check-user");
    return;
  }
};

export const changeDialogProcess = async (dramaSeq, dialogSeq) => {
  const teamStatus = getTeamStatusFromStorage();
  const dramaContent = await getDramaContentFromIndexedDB(teamStatus.nowLevel);
  dialogSeq = parseInt(dialogSeq) + 1;

  if (dialogSeq < dramaContent.dramas[dramaSeq].length) {
    router.replace({
      path: `/dialog/${teamStatus.nowLevel}/${dramaSeq}/${dialogSeq}`,
    });
  } else if (teamStatus.nowLevel === 6) {
    toGameSettlement();
  } else if (parseInt(dramaSeq) === 1) {
    try {
      const res = await req.post(
        `/team/resolve-beacon`,
        {
          teamId: getTeamStatusFromStorage()["gamecode"],
          beacon: getTeamStatusFromStorage()["beacon"],
        },
        {
          headers: {
            "access-token": getUserStatusFromStorage().accessToken,
          },
        }
      );
      updateTeamStatusToStorage(res.data);

      router.replace({
        path: `/dialog/${getTeamStatusFromStorage().nowLevel}/0/0`,
      });
    } catch (e) {
      console.log(e);
      alert("你並沒有順利闖關喔！");
    }
  } else {
    router.replace("/answer");
  }
};

export const getHintProcess = (hintId) => {
  // TODO: get hint detail
};

export const checkAnswerProcess = async (answer) => {
  // TODO: check answer
  const userStatus = getUserStatusFromStorage();
  const teamStatus = getTeamStatusFromStorage();
  const dramaContent = await getDramaContentFromIndexedDB(teamStatus.nowLevel);

  try {
    const res = await req.post(
      "/level/resolve",
      {
        gamecode: teamStatus.gamecode,
        levelId: dramaContent.levelId,
        answer,
      },
      {
        headers: {
          "access-token": userStatus.accessToken,
        },
      }
    );

    if (res.data.beacon) {
      router.replace({
        path: `/true`,
      });
    } else {
      router.replace({
        path: "/false",
      });
    }
  } catch (e) {
    console.log(e);
  }
};
