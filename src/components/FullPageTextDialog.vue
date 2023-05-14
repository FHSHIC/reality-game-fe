<script setup>
const props = defineProps(["text"]);
</script>

<template>
  <div
    class="flex h-full w-full flex-col items-center justify-center bg-black/60"
  >
    <p class="px-10 text-center text-[5vw] text-[rgb(249,246,241)]">
      {{ props.text }}
    </p>
    <div class="h-[30px]"></div>
    <span class="flex justify-center text-[50px]">
      <font-awesome-icon
        class="text-white"
        icon="fa-solid fa-caret-down"
        bounce
      />
    </span>
  </div>
</template>
