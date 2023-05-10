import router from "./router.js";

export const returnProcess = (to = "back") => {
  if (to === "back") {
    router.back();
    return;
  }
  router.push(to);
};
