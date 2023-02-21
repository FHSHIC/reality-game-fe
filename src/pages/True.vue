<script setup>
import Botton from "../components/Botton.vue";
import TruePng from "../assets/true.png";
</script>

<template>
  <div class="relative h-[600px] w-[325px] bg-[#ACDCCC]">
    <div class="absolute top-[20px] left-[60px]">
      <img :src="TruePng" alt="True.png" id="img" />
    </div>
    <div class="absolute top-[200px] left-[60px] pb-[30px]">
      <div
        class="h-[210px] w-[210px] rounded-[25px] border-4 border-[#87B5A6] bg-[#CDF2E6]"
      >
        <p class="mt-[60px] text-center text-[32px] font-bold text-[#87B5A6]">
          答對了
        </p>
        <p class="mt-[30px] text-center text-[20px] font-medium text-[#494444]">
          繼續前往下一關~
        </p>
      </div>
    </div>
    <div class="absolute top-[440px] left-[120px]">
      <Botton
        text="下一關"
        class="rounded-[30px]"
        :style="`background-color: #87B5a6`"
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
