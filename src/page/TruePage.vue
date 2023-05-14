<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

import TruePng from "../assets/true.png";

import Botton from "../components/Botton.vue";
import Gap from "../components/Gap.vue";

const router = useRouter();

const goToNextScene = async () => {
  router.replace({
    path: "/dialog",
    query: {
      nowDramaId: "",
      counter: 0,
      nowScene: 1,
    },
  });
};
</script>

<template>
  <div class="h-full w-full overflow-hidden bg-[#ACDCCC]">
    <Gap />
    <div class="flex h-[45vh] flex-col items-center justify-center">
      <img :src="TruePng" alt="True" class="w-[70vw] max-w-[19rem]" />
      <div class="absolute bottom-28 space-y-10">
        <div class="rounded-[25px] border-4 border-[#87B5A6] bg-[#CDF2E6] p-10">
          <p class="text-center text-[32px] font-bold text-[#87B5A6]">答對了</p>
          <p class="text-center text-[20px] font-medium text-[#494444]">
            繼續前往下一關~
          </p>
        </div>
        <Botton
          text="下一關"
          class="mx-auto rounded-[30px]"
          :style="`background-color: #87B5a6`"
          @click="goToNextScene"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
