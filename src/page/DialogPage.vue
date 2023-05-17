<script setup>
import { reactive, onBeforeMount, onMounted, onErrorCaptured } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getDramaContentFromIndexedDB } from "../utils/status.js";
import { changeDialogProcess } from "../utils/process.js";

import FullPageTextDialog from "../components/FullPageTextDialog.vue";
import PersonDialog from "../components/PersonDialog.vue";

import girl from "../test_assets/girl01.png";

const route = useRoute();
const router = useRouter();

const dramaStatus = reactive({
  level: route.params.level,
  dramaSeq: route.params.dramaSeq,
  dialogSeq: route.params.dialogSeq,
});

const dialogSpeak = reactive({
  speaker: "",
  speach: "",
  speakerImg: "",
  isAllPage: false,
});

onMounted(async () => {
  const dramaContent = await getDramaContentFromIndexedDB(dramaStatus.level);

  dialogSpeak.speaker =
    dramaContent.dramas[dramaStatus.dramaSeq][dramaStatus.dialogSeq].speaker;
  dialogSpeak.speach =
    dramaContent.dramas[dramaStatus.dramaSeq][dramaStatus.dialogSeq].speach;
  dialogSpeak.speakerImg =
    dramaContent.dramas[dramaStatus.dramaSeq][dramaStatus.dialogSeq].speakerImg;
  if (
    dramaContent.dramas[dramaStatus.dramaSeq][dramaStatus.dialogSeq].speaker ===
      "引導話" ||
    dramaContent.dramas[dramaStatus.dramaSeq][dramaStatus.dialogSeq].speaker ===
      "旁白"
  ) {
    dialogSpeak["isAllPage"] = true;
  } else {
    dialogSpeak["isAllPage"] = false;
  }
});

onErrorCaptured(async (e) => {
  console.log(e);
  if (dramaStatus.level === 5 && dramaStatus.dramaSeq === 1) {
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
  }
});
</script>

<template>
  <div
    class="h-full w-full bg-cover bg-center bg-no-repeat"
    :class="{
      'puzzle-bg01': dramaStatus.level === '1',
      'puzzle-bg02': dramaStatus.level === '2',
      'puzzle-bg03': dramaStatus.level === '3',
      'puzzle-bg04': dramaStatus.level === '4',
      'puzzle-bg05': dramaStatus.level === '5',
      'last-image': dramaStatus.level === '6',
    }"
    @click="changeDialogProcess(dramaStatus.dramaSeq, dramaStatus.dialogSeq)"
  >
    <FullPageTextDialog
      :text="dialogSpeak.speach"
      v-if="dialogSpeak.isAllPage"
    />
    <PersonDialog
      :image="dialogSpeak.speakerImg"
      :speaker="dialogSpeak.speaker.split('(')[0]"
      :speach="dialogSpeak.speach"
      v-if="!dialogSpeak.isAllPage"
    />
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
