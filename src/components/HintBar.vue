<template>
  <input
    type="text"
    class="w-full overflow-x-auto bg-blue-300 p-2 text-center text-lg"
    :value="props.hintContent"
    disabled
  />
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps(["hintContent"]);
</script>
