<script setup>
const props = defineProps(["name"]);
</script>

<template>
  <div class="block h-[40px] w-[180px] bg-[#C3CFFF] text-center text-[24px]">
    {{ name }}
  </div>
</template>

<style scoped></style>
