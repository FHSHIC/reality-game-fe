<script setup>
import { reactive } from "vue";

import Botton from "../components/Botton.vue";
import PlotPng from "../assets/plot.png";
import HintPng from "../assets/hint.png";
import LockPng from "../assets/lock.png";
import AnswerPng from "../assets/answer.png";
import InputArea from "../components/InputArea.vue";

const question = reactive({
  answer: "",
});
</script>

<template>
  <div class="h-full w-full bg-[#FFE0E6]">
    <div class="flex items-center justify-end gap-6 bg-[#F6C4C7] py-4 pr-6">
      <router-link to="/answer" replace>
        <img :src="PlotPng" alt="" class="w-10" />
      </router-link>
      <router-link to="/hints" replace>
        <img :src="HintPng" alt="" class="w-10" />
      </router-link>
    </div>
    <div class="relative flex flex-col items-center justify-center">
      <img
        :src="AnswerPng"
        alt=""
        id="img"
        class="w-[70vw] max-w-[19rem] pt-6"
      />
      <div class="insetx-0 absolute bottom-3">
        <InputArea
          type="text"
          :img="LockPng"
          placeholder="請輸入答案"
          v-model="question.answer"
        />
      </div>
    </div>
    <div class="w-full pt-14">
      <Botton
        text="送出"
        class="mx-auto rounded-[30px]"
        :style="`background-color: #F6C4C7`"
      />
    </div>
  </div>
</template>

<style scoped></style>
