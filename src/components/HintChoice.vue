<script setup>
const props = defineProps(["text"]);
</script>

<template>
  <div
    class="bg-dialog_name flex h-[73px] w-[220px] items-center justify-center bg-cover bg-center text-[32px] text-[#786969]"
  >
    {{ text }}
  </div>
</template>

<style scoped>
.bg-dialog_name {
  background-image: url("../assets/dialog_name_bg.png");
}
</style>
