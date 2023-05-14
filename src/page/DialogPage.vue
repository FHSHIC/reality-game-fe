<script setup>
import { reactive } from "vue";

import FullPageTextDialog from "../components/FullPageTextDialog.vue";
import PersonDialog from "../components/PersonDialog.vue";

import girl from "../test_assets/girl01.png";

const dramaStatus = reactive({
  data: {
    level: 1,
  },
});

const speak = reactive({
  speaker: "曉夢",
  speach:
    "測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字",
});
</script>

<template>
  <div
    class="h-full w-full bg-cover bg-center bg-no-repeat"
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
  >
    <FullPageTextDialog text="測試文字測試文字測試文字" />
    <PersonDialog
      :image="girl"
      :speaker="speak.speaker"
      :speach="speak.speach"
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
