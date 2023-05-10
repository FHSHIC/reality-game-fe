<script setup>
import Dialog from "../components/Dialog.vue";
import StartBotton from "../components/StartBotton.vue";
import { reactive } from "vue";
import { useRouter, useRoute } from "vue-router";

import { dramaStatus, levelStatus } from "../utils/status";
import {
  getDrama,
  getUserStatusProcess,
  getTeamStatusProcess,
} from "../utils/api";

const router = useRouter();
const route = useRoute();

getTeamStatusProcess();

if (!dramaStatus) {
  getDrama(route.query.nowDramaId);
}

const nowSceneStatus = reactive({
  counter: parseInt(route.query.counter),
  nowScene: parseInt(route.query.nowScene),
});

const self_dialog = reactive({
  speaker:
    dramaStatus.data.dramas[nowSceneStatus.nowScene][nowSceneStatus.counter]
      .speaker,
  content:
    dramaStatus.data.dramas[nowSceneStatus.nowScene][nowSceneStatus.counter]
      .content,
});

if (self_dialog.speaker !== "引導話" && self_dialog.speaker !== "旁白") {
  router.push({
    path: "/dialog",
    query: {
      nowDramaId: route.query.nowDramaId,
      counter: nowSceneStatus.counter,
      nowScene: nowSceneStatus.nowScene,
    },
  });
}

const speak = async () => {
  nowSceneStatus.counter += 1;
  if (
    nowSceneStatus.counter >=
    dramaStatus.data.dramas[nowSceneStatus.nowScene].length
  ) {
    if (nowSceneStatus.nowScene === 1) {
      if (levelStatus.data.nextDramaId === "fin") {
        console.log("fin");
        sessionStorage.clear();
        dramaStatus.data = null;
        levelStatus.data = null;
        router.push({
          path: "/gameclear",
        });
        return;
      }
      await getDrama(levelStatus.data.nextDramaId);
      // router.push({
      //   path: "/dialog",
      //   query: {
      //     nowDramaId: levelStatus.data.nextDramaId,
      //     counter: 0,
      //     nowScene: 0,
      //   },
      // });
      // router.go();
      router.push({
        path: "/waiting",
      });
      return;
    }
    router.push({
      path: "answer",
      query: {
        nowLevelId: dramaStatus.data.levelId,
      },
    });
    return;
  }
  self_dialog.speaker =
    dramaStatus.data.dramas[nowSceneStatus.nowScene][
      nowSceneStatus.counter
    ].speaker;
  if (self_dialog.speaker === "引導話" || self_dialog.speaker === "旁白") {
    router.push({
      path: "/self-dialog",
      query: {
        nowDramaId: route.query.nowDramaId,
        counter: nowSceneStatus.counter,
        nowScene: nowSceneStatus.nowScene,
      },
    });
    return;
  }

  self_dialog.content =
    dramaStatus.data.dramas[nowSceneStatus.nowScene][
      nowSceneStatus.counter
    ].content;
  router.push({
    path: "/dialog",
    query: {
      nowDramaId: route.query.nowDramaId,
      counter: nowSceneStatus.counter,
      nowScene: nowSceneStatus.nowScene,
    },
  });
};
</script>

<template>
  <div
    class="h-screen w-screen bg-cover bg-center bg-no-repeat"
    :class="{
      'puzzle-bg01': dramaStatus.data.level === 1,
      'puzzle-bg02': dramaStatus.data.level === 2,
      'puzzle-bg03': dramaStatus.data.level === 3,
      'puzzle-bg04': dramaStatus.data.level === 4,
      'puzzle-bg05':
        dramaStatus.data.level === 5 &&
        nowSceneStatus.counter !== dramaStatus.data.dramas.length - 1 &&
        nowSceneStatus.nowScene !== 1,
      'last-image':
        dramaStatus.data.level === 5 &&
        nowSceneStatus.counter === dramaStatus.data.dramas.length - 1 &&
        nowSceneStatus.nowScene === 1,
    }"
    @click="speak"
  >
    <div class="flex h-full w-full flex-row justify-center bg-black/40">
      <div class="flex flex-col justify-center">
        <p class="flex justify-center px-10 text-[5vw] text-[rgb(249,246,241)]">
          {{ self_dialog.content }}
        </p>
        <div class="h-[30px]"></div>
        <span class="flex justify-center text-[50px]">
          <font-awesome-icon
            icon="fa-solid fa-caret-down"
            class="flex justify-center text-[#F9F6F1]"
        /></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.puzzle-bg01 {
  background-image: url("../assets/dbg01.png");
}
.puzzle-bg02 {
  background-image: url("../assets/dbg02.png");
}
.puzzle-bg03 {
  background-image: url("../assets/dbg03.png");
}
.puzzle-bg04 {
  background-image: url("../assets/dbg04.png");
}
.puzzle-bg05 {
  background-image: url("../assets/dbg05.png");
}

.last-image {
  background-image: url("../assets/lastImage.jpg");
}
</style>
