<script setup>
import { reactive } from "vue";
import { getTeamStatusFromStorage } from "../utils/status";

import Gap from "../components/Gap.vue";
import HintChoice from "../components/HintChoice.vue";
import ReturnPrev from "../components/ReturnPrev.vue";

const mockdata = {
  level: 1,
  hints: ["123", "456", "789"],
};
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
          v-for="(value, index) in mockdata.hints"
          to="/hint"
          :key="value"
          replace
        >
          <HintChoice :text="`提示 ${index + 1}`" />
        </router-link>
        <router-link to="/hint" replace>
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
