import router from "./router.js";
import axios from "axios";
import {
  getLocalStorage,
  getSessionStorage,
  userStatus,
  teamStatus,
} from "./status.js";

const request = axios.create({
  baseURL: "https://reality-game.fhsh.tp.edu.tw/api",
  // baseURL: "http://localhost:8000",
});

const websocketEndpoint = "wss://reality-game.fhsh.tp.edu.tw/api/team/waiting";
// const websocketEndpoint = "ws://localhost:8000/team/waiting";

export const notifyEvent = (eventName, detail) => {
  window.dispatchEvent(
    new CustomEvent(eventName, {
      detail: {
        data: detail,
      },
    })
  );
  console.log("update");
};

const updateUserData = (data) => {
  localStorage.setItem("userData", JSON.stringify(data));
};

const updateTeamData = (data) => {
  localStorage.setItem("teamData", JSON.stringify(data));
};

const updateDramaData = (data) => {
  sessionStorage.setItem("dramaData", JSON.stringify(data));
};

const updateDramaDatas = (data) => {
  sessionStorage.setItem("dramaDatas", JSON.stringify(data));
};

const updateLevelData = (data) => {
  sessionStorage.setItem("levelData", JSON.stringify(data));
};

export const getUserStatusProcess = async () => {
  const userData = getLocalStorage("userData");
  if (!userData) {
    router.push({ path: "/login" });
  }
  try {
    const res = await request.get("/user/me", {
      headers: {
        "access-Token": userData.accessToken,
      },
    });
    updateUserData(res.data);
    notifyEvent("userUpdate", res.data);
  } catch (e) {
    console.log(e);
    localStorage.clear();
    sessionStorage.clear();
    notifyEvent("userUpdate", {});
    notifyEvent("teamUpdate", {});
    notifyEvent("dramaUpdate", {});
    notifyEvent("levelUpdate", {});
    router.push({ path: "/login" });
  }
};

export const getTeamStatusProcess = async () => {
  const userData = getLocalStorage("userData");
  if (!userData) {
    router.push({ path: "/login" });
  }
  try {
    if (!userData.userState) {
      return;
    }
    if (!userData.userState.isActivate) {
      return;
    }
    const res = await request.get(`/team/${userData.userState.gamecode}`, {
      headers: { "access-token": userData.accessToken },
    });
    console.log(res);
    updateTeamData(res.data);
    notifyEvent("teamUpdate", res.data);
  } catch (e) {
    console.log(e);
    const status = e.response.status;
    if (status === 401) {
      localStorage.clear();
      sessionStorage.clear();
      notifyEvent("userUpdate", {});
      notifyEvent("teamUpdate", {});
      notifyEvent("dramaUpdate", {});
      notifyEvent("levelUpdate", {});
      router.push({ path: "/login" });
    } else {
      alert("似乎出了點問題，請跟管理員聯繫！");
      router.push({ path: "/" });
    }
  }
};

export const loginProcess = async (account, password) => {
  try {
    const res = await request.post("/user/login", { account, password });
    updateUserData(res.data);
    alert("登入成功！");
    notifyEvent("userUpdate", res.data);
    router.push({ path: "/gamecode" });
  } catch (e) {
    alert("Email 或密碼有誤");
    console.log(e);
  }
};

export const registProcess = async (account, password, username) => {
  try {
    const res = await request.post("/user/regist", {
      account,
      password,
      username,
    });
    updateUserData(res.data);
    alert("註冊成功！");
    notifyEvent("userUpdate", res.data);
    router.push({ path: "/gamecode" });
  } catch (e) {
    alert("你的 Email 已被申請過囉！請換一組 Email 吧！");
    console.log(e);
  }
};

export const gamecodeCheckProcess = async (gamecode) => {
  try {
    const res = await request.post(
      "/team/join-team",
      {
        gamecode,
      },
      {
        headers: {
          "access-token": JSON.parse(localStorage.getItem("userData"))
            .accessToken,
        },
      }
    );
    updateTeamData(res.data);
    notifyEvent("teamUpdate", res.data);
    if (res.data.teamName !== "") {
      router.push({ path: "/waiting" });
    } else if (res.data.isTeamLeader) {
      router.push({ path: "/teamname" });
    } else {
      router.push({ path: "/waiting" });
    }
  } catch (e) {
    const status = e.response.status;
    if (status === 404) {
      alert("找不到這個遊戲序號");
    } else if (status === 423) {
      alert("這個遊戲序號有問題喔！！");
    } else if (status === 403) {
      alert("這個遊戲已經在進行中了！");
    } else if (status === 401) {
      localStorage.clear();
      sessionStorage.clear();
      notifyEvent("userUpdate", {});
      notifyEvent("teamUpdate", {});
      notifyEvent("dramaUpdate", {});
      notifyEvent("levelUpdate", {});
      router.push({ path: "/login" });
    } else {
      alert("似乎出了點問題，請跟管理員聯繫！");
    }

    console.log(e);
  }
};

export const teamnameProcess = async (gamecode, teamName) => {
  try {
    const res = await request.post(
      "/team/set-team-name",
      {
        gamecode,
        teamName,
      },
      {
        headers: {
          "access-token": JSON.parse(localStorage.getItem("userData"))
            .accessToken,
        },
      }
    );
    updateTeamData(res.data);
    notifyEvent("teamUpdate", res.data);
    router.push({ path: "/waiting" });
  } catch (e) {
    console.log(e);
    alert("出了點 bug，請跟開發者聯繫");
  }
};

export const waitingProcess = async (showInfo) => {
  const gamecode = JSON.parse(localStorage.getItem("teamData")).gamecode;
  const userId = JSON.parse(localStorage.getItem("userData")).account;
  const ws = new WebSocket(`${websocketEndpoint}/${gamecode}/${userId}`);
  ws.onmessage = async (e) => {
    const data = JSON.parse(e.data);
    sessionStorage.setItem("waitingData", e.data);
    if (data.isStart) {
      ws.close();
      await getUserStatusProcess();
      if (teamStatus.data.isStart) {
        router.push({
          path: "/dialog",
          query: {
            nowDramaId: getSessionStorage("levelData").nextDramaId,
            counter: 0,
            nowScene: 0,
          },
        });
        return;
      }
      router.push({
        path: "/dialog",
        query: { nowDramaId: data.nowDramaId, counter: 0, nowScene: 0 },
      });
      return;
    }
    showInfo.players = [...data.members];
    showInfo.onlinePlayers = [...data.onWaitMember];
    // notifyEvent("waitingUpdate", data);
  };
  window.addEventListener("closeWs", () => {
    ws.close();
    window.removeEventListener("closeWs", () => {});
  });
};

export const gamestartProcess = async (gamecode, accessToken) => {
  try {
    await request.post(
      "/team/start-game",
      {
        gamecode,
      },
      {
        headers: {
          "access-token": accessToken,
        },
      }
    );
  } catch (e) {
    console.log(e);
    const status = e.response.status;
    if (status === 401) {
      localStorage.clear();
      sessionStorage.clear();
      notifyEvent("userUpdate", {});
      notifyEvent("teamUpdate", {});
      notifyEvent("dramaUpdate", {});
      notifyEvent("levelUpdate", {});
      router.push({ path: "/login" });
    }
  }
};

export const gameContinuedProcess = async (gamecode, accessToken) => {
  try {
    await request.post(
      "/team/game-continue",
      {
        gamecode,
      },
      {
        headers: {
          "access-token": accessToken,
        },
      }
    );
  } catch (e) {
    console.log(e);
    const status = e.response.status;
    if (status === 401) {
      localStorage.clear();
      sessionStorage.clear();
      notifyEvent("userUpdate", {});
      notifyEvent("teamUpdate", {});
      notifyEvent("dramaUpdate", {});
      notifyEvent("levelUpdate", {});
      router.push({ path: "/login" });
    }
  }
};

export const getDrama = async (dramaId) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (dramaId === "fin") {
    return;
  }
  try {
    const res = await request.get(`/drama/${dramaId}`);
    updateDramaData(res.data);
    notifyEvent("dramaUpdate", res.data);
  } catch (e) {
    console.log(e);
  }
};

export const getDramas = async () => {
  try {
    const res = await request.get("/drama/all");
    console.log(res);
    updateDramaDatas(res.data);
    notifyEvent("dramasUpdate", res.data);
  } catch (e) {
    console.log(e);
  }
};

export const getLevel = async () => {
  const dramaData = JSON.parse(sessionStorage.getItem("dramaData"));
  const userData = JSON.parse(localStorage.getItem("userData"));
  try {
    const res = await request.get(`/level/${dramaData.levelId}`, {
      headers: {
        "access-token": userData.accessToken,
      },
    });
    updateLevelData(res.data);
    notifyEvent("levelUpdate", res.data);
  } catch (e) {
    console.log(e);
    const status = e.response.status;
    if (status === 401) {
      localStorage.clear();
      sessionStorage.clear();
      notifyEvent("userUpdate", {});
      notifyEvent("teamUpdate", {});
      notifyEvent("dramaUpdate", {});
      notifyEvent("levelUpdate", {});
      router.push({ path: "/login" });
    }
  }
};

export const checkLevelAns = async (answer) => {
  const dramaData = JSON.parse(sessionStorage.getItem("dramaData"));
  const userData = JSON.parse(localStorage.getItem("userData"));
  const teamData = JSON.parse(localStorage.getItem("teamData"));

  try {
    const res = await request.post(
      `/level/resolve`,
      {
        gamecode: teamData.gamecode,
        levelId: dramaData.levelId,
        answer,
      },
      {
        headers: {
          "access-token": userData.accessToken,
        },
      }
    );
    const data = res.data;
    if (!data.nextDramaId) {
      router.push({ path: "/false" });
    } else {
      updateLevelData(data);
      notifyEvent("levelUpdate", data);
      router.push({ path: "/true" });
    }
  } catch (e) {
    console.log(e);
    const status = e.response.status;
    if (status === 401) {
      localStorage.clear();
      sessionStorage.clear();
      notifyEvent("userUpdate", {});
      notifyEvent("teamUpdate", {});
      notifyEvent("dramaUpdate", {});
      notifyEvent("levelUpdate", {});
      router.push({ path: "/login" });
    }
  }
};

export const returnToAnsPage = () => {
  router.push({ path: "/answer" });
};

export const changeDrama = () => {
  const nowScene = JSON.parse(sessionStorage.getItem("nowScene"));
  if (!nowScene) {
    sessionStorage.setItem("nowScene", 1);
  } else {
    sessionStorage.setItem("nowScene", 0);
  }
  notifyEvent("nowSceneUpdate");
  router.push({ path: "/dialog" });
};

export const getHint = async (hintId) => {
  try {
    const res = await request.get(`/hint/${hintId}`);
    sessionStorage.setItem("hintData", JSON.stringify(res.data));
    notifyEvent("hintUpdate", res.data);
  } catch (e) {
    console.log(e);
  }
};

export const getHints = async () => {
  try {
    const res = await request.get("/hint/all");
    sessionStorage.setItem("hintDatas", JSON.stringify(res.data));
    notifyEvent("hintsUpdate", res.data);
  } catch (e) {
    console.log(e);
  }
};

export const finishGame = async (gamecode) => {
  try {
    const res = await request.post(
      "/team/game-finish",
      {
        gamecode,
      },
      {
        headers: {
          "access-token": userStatus.data.accessToken,
        },
      }
    );
    localStorage.clear();
    sessionStorage.clear();
    notifyEvent("userUpdate", {});
    notifyEvent("teamUpdate", {});
    notifyEvent("dramaUpdate", {});
    notifyEvent("levelUpdate", {});
    updateUserData(res.data);
    notifyEvent("userUpdate", res.data);
  } catch (e) {
    console.log(e);
    const status = e.response.status;
    if (status === 401) {
      localStorage.clear();
      sessionStorage.clear();
      notifyEvent("userUpdate", {});
      notifyEvent("teamUpdate", {});
      notifyEvent("dramaUpdate", {});
      notifyEvent("levelUpdate", {});
      router.push({ path: "/login" });
    }
  }
};
