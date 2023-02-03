<template>
  <div class="h-screen w-screen">
    <div class="w-screen bg-sky-300 p-4">
      <button class="flex items-center justify-start gap-2">
        <img :src="left_arrow" alt="" class="h-5" />
        <span class="">返回</span>
      </button>
    </div>

    <h1 class="py-10 text-center text-3xl">第 {{ levelId }} 關提示</h1>
    <div class="flex w-full flex-col items-center justify-center gap-4 px-6">
      <HintBar
        v-for="(value, index) in mockHint"
        :hintContent="value"
        :key="index"
      />
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import HintBar from "../components/HintBar.vue";
import left_arrow from "../assets/chevron-left-solid.svg";

const route = useRoute();

const levelId = route.params.levelId;

const mockHint = [
  "提示一: A",
  "提示二: B",
  "提示三: C",
  "提示四: D",
  "提示五: E",
  "提示六: F",
];
</script>
