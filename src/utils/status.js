import { reactive } from "vue";

export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const getSessionStorage = (key) => {
  return JSON.parse(sessionStorage.getItem(key));
};

export const userStatus = reactive({
  data: getLocalStorage("userData"),
});

export const teamStatus = reactive({
  data: getLocalStorage("teamData"),
});

export const waitingSataus = reactive({
  data: null,
});

export const dramaStatus = reactive({
  data: getSessionStorage("dramaData"),
});

export const dramasStatus = reactive({
  data: getSessionStorage("dramaDatas"),
});

export const nowSceneStatus = reactive({
  nowScene: 0,
  counter: 0,
});

export const levelStatus = reactive({
  data: getSessionStorage("levelData"),
});

export const hintStatus = reactive({
  data: getSessionStorage("hintData"),
});

export const hintsStatus = reactive({
  data: getSessionStorage("hintDatas"),
});

window.addEventListener("userUpdate", (e) => {
  console.log("update user");
  userStatus.data = getLocalStorage("userData");
});

window.addEventListener("teamUpdate", (e) => {
  console.log("update team");
  teamStatus.data = getLocalStorage("teamData");
});

window.addEventListener("waitingUpdate", (e) => {
  console.log("update waiting");
  waitingSataus.data = getLocalStorage("teamData");
});

window.addEventListener("dramaUpdate", (e) => {
  console.log("update drama");
  dramaStatus.data = getSessionStorage("dramaData");
});

window.addEventListener("dramasUpdate", (e) => {
  console.log("update dramas");
  dramasStatus.data = getSessionStorage("dramaDatas");
});

window.addEventListener("nowSceneUpdate", (e) => {
  console.log("update nowScene");
  nowSceneStatus.counter = e.detail.counter ? e.detail.counter : 0;
  nowSceneStatus.nowScene = e.detail.nowScene ? e.detail.nowScene : 0;
});

window.addEventListener("levelUpdate", (e) => {
  console.log("update level");
  levelStatus.data = getSessionStorage("levelData");
});

window.addEventListener("hintUpdate", (e) => {
  console.log("update hint");
  hintStatus.data = getSessionStorage("hintData");
});

window.addEventListener("hintsUpdate", (e) => {
  console.log("update hints");
  hintsStatus.data = getSessionStorage("hintDatas");
});
