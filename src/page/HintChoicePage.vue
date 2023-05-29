<script setup>
import { reactive } from "vue";
import { useRouter, onBeforeRouteLeave } from "vue-router";
import {
  getTeamStatusFromStorage,
  getLevelStatusFromStorage,
} from "../utils/status";
import { getHintProcess, getLevelAnswerProcess } from "../utils/process.js";

import Gap from "../components/Gap.vue";
import HintChoice from "../components/HintChoice.vue";
import ReturnPrev from "../components/ReturnPrev.vue";

const router = useRouter();

const levelStatus = getLevelStatusFromStorage();

onBeforeRouteLeave((to, from) => {
  if (to.fullPath === "/answer") {
    return true;
  }
  if (to.params.hintId === levelStatus.hints[levelStatus.hints.length - 1]) {
    if (window.confirm("可以看到正確解答，需要加時 40 分鐘！\n是否要觀看？")) {
      getLevelAnswerProcess();
      return true;
    }
  } else {
    if (window.confirm("查看這個提示需要加時 10 秒鐘！\n是否要觀看？")) {
      getHintProcess(to.params.hintId);
      return true;
    }
  }
  return false;
});
</script>

<template>
  <div class="bg-FuxingSlope h-full w-full bg-cover bg-center bg-no-repeat">
    <Gap gap-height="1rem" />
    <p class="pb-6 pt-10 text-center text-[55px] font-extrabold text-[#FFF4EA]">
      第 {{ getTeamStatusFromStorage().nowLevel }} 關提示
    </p>
    <div class="flex items-center justify-center pt-10">
      <div class="flex flex-col items-center gap-5">
        <router-link
          v-for="(value, index) in levelStatus.hints"
          :to="`/hint/${value}`"
          :key="value"
          v-if="index !== levelStatus.hints.length - 1"
          replace
        >
          <HintChoice :text="`提示 ${index + 1}`" />
        </router-link>
        <router-link
          :to="`/hint/${levelStatus.hints[levelStatus.hints.length - 1]}`"
          replace
        >
          <HintChoice text="看答案" />
        </router-link>
      </div>
    </div>
  </div>
  <ReturnPrev to="/answer" />
</template>

<style scoped>
.bg-FuxingSlope {
  background-image: url("../src/assets/FuxingSlope.png");
}
</style>
