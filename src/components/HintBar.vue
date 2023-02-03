<template>
  <input type="text" class="overflow-x-auto p-2" :value="props.hintContent" />
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps(["hintContent"]);
</script>
