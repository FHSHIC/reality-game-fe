<script setup>
import Botton from "../components/Botton.vue";
import Input from "../components/Input.vue";
import BackPng from "../assets/back.png";
import PlotPng from "../assets/plot.png";
import HintPng from "../assets/hint.png";
import LockPng from "../assets/lock.png";
import AnswerPng from "../assets/answer.png";
</script>

<template>
  <div class="h-screen w-screen flex-row bg-[#FFE0E6]">
    <div class="flex h-[70px] flex-row bg-[#F6C4C7]">
      <img
        :src="BackPng"
        alt=""
        class="ml-[10px] mt-[25px] h-[30px] w-[30px]"
      />

      <div class="mt-5 ml-[180px] flex h-[40px] w-[40px] flex-row space-x-3">
        <img :src="PlotPng" alt="" class="" />
        <img :src="HintPng" alt="" class="" />
      </div>
    </div>
    <img :src="AnswerPng" alt="" id="img" class="mt-10" />
    <div>
      <Input input-text="請輸入答案" class="justify-center" />
    </div>
    <!-- placeholder死掉了？ -->
    <div class="flex justify-center">
      <Botton
        text="送出"
        class="mt-[40px] rounded-[30px]"
        :style="`background-color: #F6C4C7`"
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
