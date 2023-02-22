<script setup>
import title from "../assets/title.png";
import character from "../assets/character.png";
import congratulation from "../assets/Congratulation.png";
import Botton from "../components/botton.vue";
</script>

<template>
  <div class="bg-Clear h-screen w-screen bg-cover bg-center bg-no-repeat">
    <div class="flex justify-center">
      <img :src="title" alt="" class="mt-[50px] mb-4 w-[270px]" />
    </div>
    <div class="flex justify-center">
      <img :src="character" alt="" class="relative w-[300px] pt-[15px]" />
    </div>
    <div class="flex flex-col justify-center">
      <div class="absolute top-[390px]">
        <img :src="congratulation" alt="" class="" />
      </div>
      <div class="flex justify-center">
        <div class="absolute top-[500px]">
          <Botton text="繼續" class="" BackgroundColor="#F6C4C7" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-Clear {
  background-image: url("../assets/background.png");
}
</style>
