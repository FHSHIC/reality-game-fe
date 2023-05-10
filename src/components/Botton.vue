<script setup>
const props = defineProps(["text", "BackgroundColor"]);
</script>

<template>
  <div
    class="h-[40px] w-[120px] rounded-[30px] py-1 shadow-2xl"
    :style="`background-color: ${BackgroundColor}`"
  >
    <p
      id="text"
      class="flex justify-center text-center text-[20px] font-extrabold text-[#070707]"
    >
      {{ text }}
    </p>
  </div>
</template>
