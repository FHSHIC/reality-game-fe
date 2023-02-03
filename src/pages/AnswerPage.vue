<template>
  <div class="flex h-screen w-screen flex-col pb-12">
    <TopBar />
    <div class="h-full"></div>
    <AnswerArea />
  </div>
</template>
<script setup>
import AnswerArea from "../components/AnswerArea.vue";
import TopBar from "../components/TopBar.vue";
</script>
