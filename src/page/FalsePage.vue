<script setup>
import { useRouter } from "vue-router";

import Botton from "../components/Botton.vue";
import Gap from "../components/Gap.vue";

import FalsePng from "../assets/false.png";

const router = useRouter();
const returnToAnsPage = () => {
  router.replace("/answer");
};
</script>

<template>
  <div class="h-full w-full bg-[#C3E0FF]">
    <div class="relative flex justify-center pt-10">
      <img :src="FalsePng" alt="False.png" class="w-[70vw] max-w-[19rem]" />
      <div
        class="absolute -bottom-52 flex flex-col items-center justify-center gap-6 pb-[30px]"
      >
        <div
          class="rounded-[25px] border-4 border-[#BCBFF2] bg-[#D3EAFB] p-12 px-16"
        >
          <p class="text-center text-[32px] font-bold text-[#7280B2]">答錯囉</p>
          <p class="text-center text-[20px] font-medium text-[#5D6188]">
            再想想看~
          </p>
        </div>
        <Botton
          text="再試一次"
          class="rounded-[30px]"
          :style="`background-color: #BCBFF2`"
          @click="returnToAnsPage"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
