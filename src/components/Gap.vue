<script setup>
const props = defineProps(["gapHeight"]);

const gapHeight = props.gapHeight === undefined ? "3.5rem" : props.gapHeight;
</script>

<template>
  <div :style="{ height: gapHeight }"></div>
</template>
