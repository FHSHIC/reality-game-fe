<script setup>
import Back from "../assets/back.png";
import HintChoice from "../components/HintChoice.vue";

const props = defineProps(["level"]);
</script>

<template>
  <div class="bg-FuxingSlope h-screen w-screen bg-cover bg-center bg-no-repeat">
    <img :src="Back" alt="" class="w-[30px] pl-[10px] pt-[40px]" />
    <p class="pt-4 pb-6 text-center text-[55px] font-extrabold text-[#FFF4EA]">
      第{{ level }}關提示
    </p>
    <div class="flex items-center justify-center">
      <div class="space-y-6">
        <HintChoice text="提示一" />
        <HintChoice text="提示二" />
        <HintChoice text="提示三" />
        <HintChoice text="提示四" />
        <HintChoice text="提示五" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-FuxingSlope {
  background-image: url("../src/assets/FuxingSlope.png");
}
</style>

標題stroke用不出來
