<script setup>
import { clearanceProcess } from "../utils/process.js";

import Botton from "../components/Botton.vue";

import title from "../assets/Title.png";
import character from "../assets/character.png";
import congratulation from "../assets/Congratulation.png";
</script>

<template>
  <div class="bg-Clear h-full w-full bg-cover bg-center bg-no-repeat">
    <div class="flex justify-center">
      <img :src="title" alt="" class="mb-4 mt-[50px] w-[270px]" />
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
          <router-link to="/start">
            <Botton
              text="繼續"
              class=""
              BackgroundColor="#F6C4C7"
              @click="clearanceProcess"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-Clear {
  background-image: url("../assets/clearance_background.png");
}
</style>
