<script setup>
import Back from "../assets/back.png";
import WaitingPlayer from "../components/WaitingPlayer.vue";
import Botton from "../components/Botton.vue";
</script>

<template>
  <div class="h-screen w-full bg-[#F1E7FF]">
    <img :src="Back" alt="" class="w-[30px] pl-[10px] pt-[40px]" />
    <p class="pt-4 pb-6 text-center text-[55px] font-extrabold text-[#FFF4EA]">
      隊伍名稱
    </p>
    <div class="flex items-center justify-center">
      <div class="space-y-6">
        <WaitingPlayer name="隊長" />
        <WaitingPlayer name="隊員A" />
        <WaitingPlayer name="隊員B" />
        <WaitingPlayer name="隊員C" />
      </div>
    </div>
    <div class="mt-[45px] flex justify-center">
      <Botton text="開始遊戲" BackgroundColor="#AEBFF9" />
    </div>
  </div>
</template>

<style scoped></style>

標題stroke用不出來
