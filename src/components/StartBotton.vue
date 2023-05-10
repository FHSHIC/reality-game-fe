<script setup>
import FlowerPng from "../assets/flower.png";
const props = defineProps(["text"]);
</script>

<template>
  <div
    class="flex h-[55px] w-[180px] justify-between rounded-2xl border-2 border-[#F6C4C7] bg-[#FFFCFC] shadow-xl"
  >
    <img :src="FlowerPng" alt="" class="m-auto flex h-[40px] w-[40px]" />
    <p class="py-[7px] text-center text-[24px] font-extrabold text-[#5E4C40]">
      {{ text }}
    </p>
    <img :src="FlowerPng" alt="" class="m-auto h-[40px] w-[40px]" />
  </div>
</template>
