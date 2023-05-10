<script setup>
import { reactive } from "vue";
import Gap from "../components/Gap.vue";
import HintChoice from "../components/HintChoice.vue";
import ReturnPrev from "../components/ReturnPrev.vue";

import { getLevel } from "../utils/api";
import { dramaStatus, levelStatus } from "../utils/status";

if (!levelStatus.data) {
  getLevel();
}
</script>

<template>
  <div class="bg-FuxingSlope h-screen w-screen bg-cover bg-center bg-no-repeat">
    <Gap gap-height="1rem" />
    <p class="pt-4 pb-6 text-center text-[55px] font-extrabold text-[#FFF4EA]">
      第 {{ dramaStatus.data.level }} 關提示
    </p>
    <div class="flex items-center justify-center">
      <div class="flex flex-col items-center gap-5">
        <router-link
          v-for="(value, index) in levelStatus.data.hints"
          :to="`/hint-detail?hintId=${value}`"
          :key="value"
        >
          <HintChoice :text="`提示 ${index + 1}`" />
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
