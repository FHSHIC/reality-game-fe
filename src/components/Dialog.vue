<template>
  <div class="relative mx-auto w-screen py-4 px-6">
    <div
      class="dialog-content-bg relative max-h-32 overflow-auto bg-cover bg-center bg-no-repeat p-3 pt-5"
    >
      <p class="h-24 overflow-auto pb-2 text-sm">
        {{ props.speakContent }}
      </p>
    </div>
    <div
      class="dialog-name-bg absolute -top-6 left-5 bg-cover bg-center bg-no-repeat p-8"
    >
      <p class="text-sm">{{ props.speakName }}</p>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import dialog_content_bg from "../assets/dialog_content_bg.png";

const props = defineProps(["speakName", "speakContent"]);
</script>

<style>
.dialog-content-bg {
  background-image: url("../assets/dialog_content_bg.png");
  background-size: 100%;
}

.dialog-name-bg {
  background-image: url("../assets/dialog_name_bg.png");
  background-size: 100%;
}
</style>
