<script setup>
import titlePng from "../assets/Title.png";
import monkeyPng from "../assets/monkey.png";
import SakuraButton from "../components/SakuraButton.vue";
</script>

<template>
  <div class="grid h-full w-full grid-rows-2 justify-items-stretch">
    <div class="flex items-center justify-center">
      <img :src="titlePng" alt="標題圖片" class="" />
    </div>
    <div class="relative justify-self-end">
      <div class="absolute inset-x-0 -top-10 w-screen text-center">
        <SakuraButton class="">進入遊戲</SakuraButton>
      </div>
      <img :src="monkeyPng" alt="猴子們" class="self-end" />
    </div>
  </div>
</template>
