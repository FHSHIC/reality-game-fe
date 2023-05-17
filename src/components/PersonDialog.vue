<script setup>
import Dialog from "./Dialog.vue";

const props = defineProps(["image", "speaker", "speach"]);
</script>

<template>
  <div class="relative h-full w-full">
    <img :src="props.image" class="w-full pt-32" />
    <div class="absolute bottom-16">
      <Dialog :speak-content="props.speach" :speak-name="props.speaker" />
    </div>
  </div>
</template>
