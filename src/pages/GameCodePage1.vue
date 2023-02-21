<script setup>
import Back from "../assets/back.png";
import CloseEyesSmile from "../assets/CloseEyesSmile.png";
import input from "../components/Input.vue";
import Botton from "../components/Botton.vue";
</script>

<template>
  <div class="bg-Orange h-screen w-screen bg-cover bg-center bg-no-repeat">
    <img :src="Back" alt="" class="w-[30px] pl-[10px] pt-[40px]" />
    <div class="relative flex justify-center pt-[30px]">
      <img :src="CloseEyesSmile" alt="" class="h-[300px]" />
    </div>

    <!-- <input /> -->
    <!-- 這是假的component -->
    <div class="flex justify-center">
      <div class="absolute top-[360px]">
        <div class="h-[40px] w-[270px] rounded-xl bg-[#D9D9D9]"></div>
      </div>
    </div>

    <p class="pt-7 pb-10 text-center text-xl font-black text-[#5E4C40]">
      請從袋中拿出卡片輸入遊戲序號
    </p>
    <div class="flex justify-center">
      <Botton text="進入隊伍" BackgroundColor="#F6C4C7" />
    </div>
  </div>
</template>

<style scoped>
.bg-Orange {
  background-image: url("../assets/OrangeBackground.png");
}
</style>
