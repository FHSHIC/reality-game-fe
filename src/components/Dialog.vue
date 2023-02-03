<template>
  <div class="relative mx-auto w-screen py-4 px-6">
    <div class="max-h-36 overflow-auto border-2 border-black p-3 pt-7">
      <p class="text-sm">
        {{ props.speakContent }}
      </p>
    </div>
    <div class="absolute top-0 left-8 border-2 border-black bg-white p-2">
      <p class="text-sm">
        {{ props.speakName }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps(["speakName", "speakContent"]);
</script>
