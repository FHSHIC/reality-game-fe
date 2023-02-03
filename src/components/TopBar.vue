<template>
  <div
    class="flex w-screen items-center justify-end gap-x-6 bg-blue-400 py-2 px-5"
  >
    <div class="p-1">
      <img :src="book" alt="" class="h-8" />
    </div>
    <div class="p-1">
      <img class="h-8" :src="lightball" alt="" />
    </div>
  </div>
</template>
<script setup>
import lightball from "../assets/lightbulb-regular.svg";
import book from "../assets/book-solid.svg";
</script>
