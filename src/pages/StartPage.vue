<script setup>
import titlePng from "../assets/Title.png";
import monkeyPng from "../assets/monkey.png";
import StartBotton from "../components/StartBotton.vue";
</script>

<template>
  <div class="flex h-screen w-full flex-col justify-between bg-[#FFF3A8]">
    <div class="">
      <div class="h-[90px]"></div>
      <div class="flex justify-center">
        <img :src="titlePng" alt="" class="w-[300px]" />
      </div>
    </div>
    <div class="flex justify-center">
      <StartBotton text="進入遊戲" />
    </div>
    <div class="flex-col items-end">
      <img :src="monkeyPng" alt="" class="w-full" />
    </div>
  </div>
</template>

<style scoped></style>
