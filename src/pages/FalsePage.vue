<script setup>
import Botton from "../components/Botton.vue";
import FalsePng from "../assets/false.png";
import { returnToAnsPage } from "../utils/api";
</script>

<template>
  <div class="relative h-screen w-screen bg-[#C3E0FF]">
    <div class="flex justify-center pt-[20px]">
      <div class=""></div>
      <img :src="FalsePng" alt="False.png" id="img" />
    </div>
    <div class="flex justify-center">
      <div class="absolute top-[250px] pb-[30px]">
        <div
          class="rounded-[25px] border-4 border-[#BCBFF2] bg-[#D3EAFB] p-12 px-16"
        >
          <p class="text-center text-[32px] font-bold text-[#7280B2]">答錯囉</p>
          <p class="text-center text-[20px] font-medium text-[#5D6188]">
            再想想看~
          </p>
        </div>
      </div>
      <div class="absolute top-[500px] flex justify-center">
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

<style scoped>
#img {
  width: 210px;
  height: 280px;
  display: flex;
  margin: auto;
}
</style>
