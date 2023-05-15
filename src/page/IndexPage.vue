<script setup>
import titlePng from "../assets/Title.png";
import monkeyPng from "../assets/monkey.png";
import SakuraButton from "../components/SakuraButton.vue";
</script>

<template>
  <div class="flex h-full w-full flex-col justify-between bg-[#FFF3A8]">
    <div class="">
      <div class="h-[90px]"></div>
      <div class="flex justify-center">
        <img :src="titlePng" alt="" class="w-[300px]" />
      </div>
    </div>
    <div class="flex flex-col items-center justify-center gap-6 pt-6">
      <router-link to="/check-user">
        <SakuraButton>登入</SakuraButton>
      </router-link>
    </div>
    <div class="flex-col items-end">
      <img :src="monkeyPng" alt="" class="w-full" />
    </div>
  </div>
</template>

<style scoped></style>
