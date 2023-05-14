<script setup>
const props = defineProps(["name"]);
</script>

<template>
  <div
    class="flex h-[40px] w-[180px] justify-center bg-[#C3CFFF] px-2 text-center text-[24px]"
  >
    {{ props.name }}
  </div>
</template>

<style scoped></style>
