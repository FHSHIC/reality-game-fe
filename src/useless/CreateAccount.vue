<script setup>
import Back from "../assets/back.png";
import Character from "../assets/character.png";
import Input from "../components/Input.vue";
import StartBotton from "../components/StartBotton.vue";
import Botton from "../components/Botton.vue";
</script>
<template>
  <div class="h-[600px] w-full bg-[#FFF3A8]">
    <img :src="Back" alt="" class="w-[30px] pl-[10px] pt-[40px]" />
    <div class="flex justify-center">
      <img :src="Character" alt="" class="w-[220px] pl-3 pt-[10px]" />
    </div>
    <div class="space-y-5">
      <Input InputText="請輸入您的email" />
      <Input InputText="請輸入4-12位英數字密碼" />
      <Input InputText="請確認您的密碼" />
      <Input InputText="請輸入遊戲暱稱(6字以內）" />
    </div>
    <div class="mt-4 flex justify-center">
      <StartBotton text="建立帳號" />
    </div>
    <div class="flex justify-center">
      <Botton
        text="已有帳號"
        :style="`background-color: #F6C4C7`"
        class="mt-4 rounded-[30px]"
      />
    </div>
  </div>
</template>
<style scoped></style>
