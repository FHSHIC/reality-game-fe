<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import Botton from "../components/Botton.vue";
import TruePng from "../assets/true.png";
import Gap from "../components/Gap.vue";

import { dramaStatus } from "../utils/status";

const router = useRouter();

const goToNextScene = async () => {
  router.push({
    path: "/dialog",
    query: {
      nowDramaId: dramaStatus.data._id,
      counter: 0,
      nowScene: 1,
    },
  });
};
</script>

<template>
  <div class="w-full overflow-hidden bg-[#ACDCCC]">
    <Gap />
    <div class="flex h-[45vh] flex-col items-center justify-center">
      <img :src="TruePng" alt="True" class="w-60" />
      <div class="absolute top-72">
        <div class="rounded-[25px] border-4 border-[#87B5A6] bg-[#CDF2E6] p-10">
          <p class="text-center text-[32px] font-bold text-[#87B5A6]">答對了</p>
          <p class="text-center text-[20px] font-medium text-[#494444]">
            繼續前往下一關~
          </p>
        </div>
      </div>
    </div>

    <div class="flex h-[49vh] items-center justify-start">
      <Botton
        text="下一關"
        class="mx-auto rounded-[30px]"
        :style="`background-color: #87B5a6`"
        @click="goToNextScene"
      />
    </div>
  </div>
</template>

<style scoped>
#img {
  width: 210px;
  height: 280px;
  display: flex;
  margin: auto;
}
</style>
