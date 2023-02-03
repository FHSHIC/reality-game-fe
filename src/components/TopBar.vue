<template>
  <div
    class="flex w-screen items-center justify-end gap-x-6 bg-blue-400 py-4 px-5"
  >
    <div class="p-2">
      <img :src="book" alt="" class="h-10" />
    </div>
    <div class="p-2">
      <img class="h-10" :src="lightball" alt="" />
    </div>
  </div>
</template>
<script setup>
import lightball from "../assets/lightbulb-regular.svg";
import book from "../assets/book-solid.svg";
</script>
