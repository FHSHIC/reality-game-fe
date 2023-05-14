<script setup>
import Email from "../assets/email.png";
const props = defineProps(["Icon", "InputText"]);
</script>
<template>
  <div class="flex flex-row justify-evenly">
    <img :src="Email" alt="" class="w-[30px]" />
    <!-- <img :src="Icon" alt="" class="w-[30px]" /> -->
    <input
      type="text"
      class="h-[40px] w-[230px] rounded-lg bg-[#D9D9D9] pl-2 shadow-sm placeholder:text-[#818181] focus:border-[#C3E0FF] focus:outline-none focus:ring-2 focus:ring-[#C3E0FF]"
      :placeholder="InputText"
    />
    <!-- Icon 尚未成功 -->
  </div>
</template>
<style scoped></style>
