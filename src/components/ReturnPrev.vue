<script setup>
import { returnProcess } from "../utils/utils.js";

const props = defineProps(["to"]);
</script>

<template>
  <button class="fixed top-4 left-4" @click="returnProcess(props.to)">
    <span class="text-3xl">
      <font-awesome-icon icon="fa-solid fa-arrow-left" />
    </span>
  </button>
</template>
