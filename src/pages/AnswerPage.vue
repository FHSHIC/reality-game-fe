<script setup>
import { reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import Botton from "../components/Botton.vue";
import PlotPng from "../assets/plot.png";
import HintPng from "../assets/hint.png";
import LockPng from "../assets/lock.png";
import AnswerPng from "../assets/answer.png";
import InputArea from "../components/InputArea.vue";

import { getLevel, checkLevelAns } from "../utils/api";

import { levelStatus, dramaStatus } from "../utils/status";

if (!levelStatus.data) {
  getLevel();
}

const dramaUrl = `/dialog?nowDramaId=${dramaStatus.data._id}&counter=0&nowScene=0`;

const question = reactive({
  answer: "",
});
</script>

<template>
  <div class="h-screen w-screen bg-[#FFE0E6]">
    <div class="flex items-center justify-end gap-6 bg-[#F6C4C7] py-4 pr-6">
      <router-link :to="dramaUrl">
        <img :src="PlotPng" alt="" class="w-10" />
      </router-link>
      <router-link :to="`/hints`">
        <img :src="HintPng" alt="" class="w-10" />
      </router-link>
    </div>
    <div class="relative flex flex-col items-center justify-center">
      <img :src="AnswerPng" alt="" id="img" class="mt-10" />
      <div class="insetx-0 absolute -bottom-1">
        <InputArea
          type="text"
          :img="LockPng"
          placeholder="請輸入答案"
          v-model="question.answer"
        />
      </div>
    </div>
    <div class="w-full pt-10">
      <Botton
        text="送出"
        class="mx-auto mt-[40px] rounded-[30px]"
        :style="`background-color: #F6C4C7`"
        @click="checkLevelAns(question.answer)"
      />
    </div>
  </div>
</template>

<style scoped>
#img {
  width: 210px;
  height: 280px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
}
</style>
