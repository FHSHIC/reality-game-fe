<script setup>
import Botton from "../components/botton.vue";
</script>

<template>
  <div
    class="bg-FuxingBuilding h-screen w-screen bg-cover bg-center bg-no-repeat"
  >
    <div class="flex justify-center">
      <div class="mt-[140px] block h-80 w-[230px] bg-black opacity-60">
        <p
          class="mt-4 flex justify-center text-center text-2xl font-bold text-white"
        >
          標題
        </p>
        <p
          class="mx-8 mt-3 text-center indent-2 text-lg font-extralight text-white"
        >
          每行9個字，最多6行啦。媽的改變了我的命運。說到媽的，你會想到什麼？掌握思考過程，也就掌握了媽的。媽的勒。
        </p>
        <Botton
          text="確認"
          class="mt-4 flex justify-center"
          BackgroundColor="#D9D9D9"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-FuxingBuilding {
  background-image: url("../assets/FuxingBuilding.png");
}
</style>
