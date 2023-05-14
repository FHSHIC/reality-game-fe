<script setup>
import { defineProps } from "vue";

const props = defineProps([
  "speakName",
  "speakContent",
  "nameTextColor",
  "contentTextColor",
]);
</script>

<template>
  <div class="relative mx-auto w-screen px-6 py-4">
    <div
      class="dialog-content-bg relative max-h-32 overflow-auto bg-cover bg-center bg-no-repeat p-3 pt-5"
    >
      <p
        class="h-24 overflow-auto p-2 text-sm"
        :style="`color: ${contentTextColor}`"
      >
        {{ props.speakContent }}
      </p>
      <font-awesome-icon
        class="absolute bottom-4 right-3"
        :icon="['fas', 'caret-down']"
        bounce
      />
    </div>
    <div
      class="dialog-name-bg absolute -top-6 left-5 bg-cover bg-center bg-no-repeat p-8"
    >
      <p class="text-sm" :style="`color: ${nameTextColor}`">
        {{ props.speakName }}
      </p>
    </div>
  </div>
</template>

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
