<script setup>
import Back from "../assets/back.png";
import Character from "../assets/character.png";
import Input from "../components/Input.vue";
import StartBotton from "../components/StartBotton.vue";
</script>
<template>
  <div class="h-[600px] w-full bg-[#FFF3A8]">
    <img :src="Back" alt="" class="w-[30px] pl-[10px] pt-[40px]" />
    <div class="flex justify-center">
      <img :src="Character" alt="" class="w-[220px] pl-3 pt-[50px]" />
    </div>
    <div class="space-y-7">
      <Input InputText="請輸入您的email" />
      <Input InputText="請確認您的密碼" />
    </div>
    <div class="mt-10 flex justify-center">
      <StartBotton text="登入帳號" />
    </div>
    <div class="flex justify-center"></div>
  </div>
</template>
<style scoped></style>
