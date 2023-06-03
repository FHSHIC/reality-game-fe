<script setup>
import { reactive } from "vue";
import {
  clearanceProcess,
  getTeamStatusProcess,
  timeSettle2FormatStringProcess,
} from "../utils/process.js";
import { getTeamStatusFromStorage } from "../utils/status";

import Botton from "../components/Botton.vue";

import title from "../assets/Title.png";
import character from "../assets/character.png";
import congratulation from "../assets/Congratulation.png";

getTeamStatusProcess(getTeamStatusFromStorage().gamecode, false);

const time = timeSettle2FormatStringProcess(
  getTeamStatusFromStorage().startTime,
  getTeamStatusFromStorage().endTime,
  getTeamStatusFromStorage().extraTime
);
</script>

<template>
  <div class="bg-Clear h-full w-full bg-cover bg-center bg-no-repeat">
    <img :src="title" alt="" class="mx-auto w-[270px] pt-10" />
    <div class="relative pb-4">
      <img :src="character" alt="" class="mx-auto w-[300px] pt-4" />
      <img :src="congratulation" alt="" class="absolute -bottom-20" />
    </div>
    <div class="py-16">
      <p class="text-center text-xl">{{ time }}</p>
    </div>
    <div class="flex items-center justify-center">
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
</template>

<style scoped>
.bg-Clear {
  background-image: url("../assets/clearance_background.png");
}
</style>
