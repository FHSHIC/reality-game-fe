<script setup>
import Dialog from "./Dialog.vue";

import { getTeamStatusFromStorage } from "../utils/status";

const props = defineProps(["image", "speaker", "speach"]);

/* 有技術債 */

const teamStatus = getTeamStatusFromStorage();
</script>

<template>
  <div class="relative h-full w-full">
    <img :src="props.image" class="w-full pt-32" />
    <div
      class="absolute"
      :class="{
        'top-8': teamStatus.nowLevel === 6,
        'bottom-16': teamStatus !== 6,
      }"
    >
      <Dialog :speak-content="props.speach" :speak-name="props.speaker" />
    </div>
  </div>
</template>
