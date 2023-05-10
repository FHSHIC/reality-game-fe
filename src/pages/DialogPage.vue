<script setup>
import { reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import girl01 from "../assets/girl01.png"; //曉夢
import boy01 from "../assets/true.png"; // 阿榮
import boy02 from "../assets/false.png"; // 南衫
import Dialog from "../components/Dialog.vue";
import { getDrama, getTeamStatusProcess, notifyEvent } from "../utils/api";
import { dramaStatus, levelStatus } from "../utils/status";

const router = useRouter();
const route = useRoute();

getTeamStatusProcess();

if (!dramaStatus.data) {
  getDrama(route.query.nowDramaId);
  router.go();
}

console.log(parseInt(route.query.counter));

const nowSceneStatus = reactive({
  counter: parseInt(route.query.counter),
  nowScene: parseInt(route.query.nowScene),
});

console.log(
  dramaStatus.data.dramas[nowSceneStatus.nowScene][
    parseInt(route.query.counter)
  ]
);

const speaks = reactive({
  speaker:
    dramaStatus.data.dramas[nowSceneStatus.nowScene][nowSceneStatus.counter]
      .speaker,
  content:
    dramaStatus.data.dramas[nowSceneStatus.nowScene][nowSceneStatus.counter]
      .content,
  image: 0,
  /*
   * image: 1 -> girl01(曉夢), 2 -> boy01(阿榮), 3 -> boy02(南衫)
   */
  decideImage: () => {
    if (
      speaks.speaker.search("復興人內心話") !== -1 ||
      speaks.speaker.search("復興人") !== -1
    ) {
      speaks.image = 0;
    }
    if (speaks.speaker.search("曉夢") !== -1) {
      speaks.image = "1";
    }
    if (speaks.speaker.search("阿榮") !== -1) {
      speaks.image = "2";
    }
    if (speaks.speaker.search("南杉") !== -1) {
      speaks.image = "3";
    }
  },
});

if (speaks.speaker === "引導話" || speaks.speaker === "旁白") {
  router.push({
    path: "/self-dialog",
    query: {
      nowDramaId: route.query.nowDramaId,
      counter: nowSceneStatus.counter,
      nowScene: nowSceneStatus.nowScene,
    },
  });
}

speaks.decideImage();

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
      //     nowDramaId: dramaStatus.data._id,
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
    levelStatus.data = null;
    router.push({
      path: "answer",
      query: {
        nowLevelId: dramaStatus.data.levelId,
      },
    });
    return;
  }
  speaks.speaker =
    dramaStatus.data.dramas[nowSceneStatus.nowScene][
      nowSceneStatus.counter
    ].speaker;

  if (speaks.speaker === "引導話" || speaks.speaker === "旁白") {
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
  speaks.content =
    dramaStatus.data.dramas[nowSceneStatus.nowScene][
      nowSceneStatus.counter
    ].content;
  speaks.decideImage();
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
    class="relative h-screen w-screen bg-cover bg-center"
    :class="{
      'puzzle-bg01': dramaStatus.data.level === 1,
      'puzzle-bg02': dramaStatus.data.level === 2,
      'puzzle-bg03': dramaStatus.data.level === 3,
      'puzzle-bg04': dramaStatus.data.level === 4,
      'puzzle-bg05': dramaStatus.data.level === 5,
    }"
    @click="speak"
  >
    <img
      :src="girl01"
      alt="girl01"
      class="w-full pt-32"
      v-if="speaks.image === '1'"
    />
    <img
      :src="boy01"
      alt="boy01"
      class="w-full pt-32"
      v-if="speaks.image === '2'"
    />
    <img
      :src="boy02"
      alt="boy02"
      class="w-full pt-32"
      v-if="speaks.image === '3'"
    />
    <div class="absolute bottom-16">
      <Dialog
        :speak-content="speaks.content"
        :speak-name="speaks.speaker.split('(')[0]"
      />
    </div>
  </div>
</template>

<style>
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
</style>
