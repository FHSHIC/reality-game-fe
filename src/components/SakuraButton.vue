<script setup>
import sakura from "../assets/blossom.png";
</script>

<template>
  <button class="rounded-lg border-2 border-[#F6C4C7] bg-[#FFFCFC]">
    <div class="flex items-center justify-center gap-2">
      <div class="">
        <img :src="sakura" alt="sakura" class="w-12" />
      </div>
      <p class="grow text-2xl font-bold text-[#5E4C40]">
        <slot></slot>
      </p>
      <div class="">
        <img :src="sakura" alt="sakura" class="w-12" />
      </div>
    </div>
  </button>
</template>
